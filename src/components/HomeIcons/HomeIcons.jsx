import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin} from "react-icons/fa";
import styled from "styled-components";

const IconsHomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    svg {
      margin: 0 8px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px) scale(1.2);
        color: ${(props) => props.hoverColor || "#8399a5"}; /* Essa pros vai servir para deixar as cores do hover dinamicas*/
      }
    }
  }
`;

const HomeIcons = ({ linkedinUrl}) => {
  const [linkedinColor, setLinkedinColor] = useState("#4D4C7D"); // LinkedIn color

  return (
    <IconsHomeDiv>
      <motion.div whileHover={{ scale: 1.2 }}>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkedinColor("#0077b5")} //Muda a cor quando entra
          onMouseLeave={() => setLinkedinColor("#4D4C7D")} //Cor que fica quando sai
        >
          <FaLinkedin size={24} color={linkedinColor} />
        </a>
      </motion.div>

    </IconsHomeDiv>
  );
};

export default HomeIcons;
