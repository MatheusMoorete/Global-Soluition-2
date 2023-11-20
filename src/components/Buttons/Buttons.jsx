import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled(motion.button)`
  background-color: #088395;
  color: #fff;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
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
