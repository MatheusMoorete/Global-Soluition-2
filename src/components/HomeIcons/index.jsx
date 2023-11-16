import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const IconsHomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 8px;
    cursor: pointer;

    /* Adicione a propriedade whileHover para aplicar o efeito 3D */
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: translateY(-5px) scale(1.2);
    }
  }
`;

const SocialIcons = ({ linkedinUrl, githubUrl }) => {
  return (
    <IconsHomeDiv>
      <motion.div whileHover={{ scale: 1.2 }}>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#8399a5" />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#8399a5" />
        </a>
      </motion.div>
    </IconsHomeDiv>
  );
};

export default SocialIcons;
