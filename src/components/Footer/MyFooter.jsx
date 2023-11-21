//Styled Components e Logica do Footer do site, deixei os Styled Components no mesmo arquivo pq são poucos

import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa'; 


const FooterContainer = styled.footer`
  display: flex ;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  padding: 1.7rem 0;
`;

const BackToTop = styled.div`
    svg {
    cursor: pointer;
    color: #ffffff ; 
    transition: all 200ms ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const MyFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    
    <FooterContainer>
      <BackToTop>
        <FaArrowUp onClick={scrollToTop} />
      </BackToTop>
    </FooterContainer>
  );
};

export default MyFooter;
