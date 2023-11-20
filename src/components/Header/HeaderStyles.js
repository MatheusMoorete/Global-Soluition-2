// HeaderStyles.js
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #363062;
  box-shadow: 0px 4px 4px rgba(14, 14, 14, 0.245);
  font-family: 'Rubik', sans-serif;
`;

export const AnimatedNavLink = styled(Nav.Link)`
  color: #ffffff;
  padding: 0.5rem 1rem;
  position: relative;
  display: inline-block;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #F9B572;
    transition: width 0.2s ease;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    transform: scale(1.1) rotateX(-5deg);
  }

  &.Home {
    font-weight: bold;
    font-size: 1.7em;
  }

  &.active {
    font-weight: bold;
    color: #F9B572
  }
`;

export default { StyledNavbar, AnimatedNavLink };
