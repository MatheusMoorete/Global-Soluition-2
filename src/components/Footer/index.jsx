import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa'; 

const FooterContainer = styled.footer`
  background-color: #333333;
  padding: 1.7rem 0;
`;

const FooterText = styled.div`
  font-size: 1.3rem;
  color: darken($white-color, 30%);
  a {
    font-size: 1.3rem;
    color: darken($white-color, 25%);
    transition: all 0.2s ease-in-out;
    display: inline-block;
    &:hover,
    &:active {
      color: $primary-color;
    }
  }
`;

const BackToTop = styled.div`
  i {
    color: #ffffff; // Cor da seta para cima
    margin: 2rem 0 $default-font-size;
    transition: all 200ms ease;

    &:hover {
      transform: translateY(-2px);
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
      <FooterText>
        <a href="#" onClick={scrollToTop}>Clique para voltar ao topo</a>
      </FooterText>
    </FooterContainer>
  );
};

export default MyFooter;
