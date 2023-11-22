import styled from 'styled-components';
import { motion } from 'framer-motion';



const StyledArrow = styled(motion.div)`
 position: absolute;
 left: 50%;
 top: 38rem;
 transform: translateX(-50%);
 height: 50px;
 width: 30px;
 border: 2px solid #000000;
 border-radius: 50px;
 cursor: pointer;
 &::before,
 &::after {
  height: 10px;
  width: 10px;
  content: "";
  position: absolute;
  top: 20%;
  left: 50%;
  border: 2px solid #000000;
  transform: translate(-50%, -100%) rotate(45deg);
  border-top: none;
  border-left: none;
  animation: scroll-down 1s ease-in-out infinite;
 }
 &::after {
  top: 30%;
  animation-delay: 0.3s;
 }
 @keyframes scroll-down {
  0% { top: 20%; opacity: 1; }
  50% { top: 50%; opacity: 0; }
  100% { top: 80%; opacity: 1; }
 }
`;


export default StyledArrow