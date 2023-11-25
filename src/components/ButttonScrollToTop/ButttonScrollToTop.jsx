// ButttonScrollToTop.js

import { FaArrowUp } from 'react-icons/fa'; 
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const BackToTop = styled.div`
  svg {
    cursor: pointer;
    color: #ffffff; 
  }
`;

const BotaoScroll = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  margin: 20px;
  border-radius: 50%;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: #f99417; 
  border: none;
`;

const Icone = styled(FaArrowUp)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
`;

const ButttonScrollToTop = ({ scrollThreshold }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > scrollThreshold) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <BotaoScroll style={{ display: showScrollButton ? "block" : "none" }}>
      <BackToTop>
        <Icone onClick={scrollToTop} />
      </BackToTop>
    </BotaoScroll>
  );
};

export default ButttonScrollToTop;
