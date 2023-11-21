//Esse componente está sendo reaproveitado na pagina Prevenção

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled(motion.button)`
  background-color: #4D4C7D;
  color: #fff;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    background-color: #363062;
  }
  
`;

const Buttons = ({ children }) => {
  const buttonTexts = React.Children.toArray(children);

  return (
    <ButtonContainer>
      {buttonTexts.map((text, index) => (
        <StyledButton key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {text}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
};

export default Buttons;
