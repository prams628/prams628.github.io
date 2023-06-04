import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { debounce } from "./utils";

const navLinks = [
  {
    "name": "About",
    "url": "/#home"
  },
  {
    "name": "Education",
    "url": "/#education"
  },
  {
    "name": "Experience",
    "url": "/#experience"
  },
  {
    "name": "Projects",
    "url": "/#projects"
  }
]

const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  padding-left: 60%;
  z-index: 12;
  align-items: right;
  /* Third Nav */
  position: fixed;
  justify-content: flex-end;
  transition: all 0.5s ease;
`;

const NavLink = styled(HashLink)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  .active {
    color: #ffffff;
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


const NavBar = () => {

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = debounce(() => {
    var currScrollPosition = window.scrollY;

    // navbar should be made visible if the scroll length is greater than 70 or the current position is less than 10
    setVisible(
      (
        prevScrollPosition > currScrollPosition &&
        prevScrollPosition - currScrollPosition > 70
      ) ||
      currScrollPosition < 10
    );
    setPrevScrollPosition(currScrollPosition);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPosition, visible, handleScroll]);

  return (
    <>
    <Nav style={{ top: visible ? '0' : '-60px' }}>
      <Bars />

      <NavMenu>
        { navLinks &&
          navLinks.map(({ url, name }, i) => (
            <NavLink smooth to={url} key={name}>
              {name}
            </NavLink>
          ))
        }
      </NavMenu>
    </Nav>
  </>
  )
}

export default NavBar;