// HomeSection.js
import React from "react";
import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import VideoHomeSection from "../../assets/VideoHomeSection.mp4";

const StyledSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.242);
    
  }
  button {
    margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: 2px solid;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: linear-gradient(to right, transparent 50%, #363062 50%);
    background-size: 200% 100%;
    transition: background-position 0.34s ease; 
    background-position: right; 
  }

  .play-icon {
    margin-left: 8px;
  }
}
`;

const TitleStyle = styled.h1`
    font-size: 10rem;
    text-transform: uppercase;
    margin: 0 auto;
    font-family: 'Alegreya', serif;
`
const SloganStyle = styled.p`
  font-size: 1.5rem;
  margin: 0 auto;
  text-transform: uppercase;
  font-family: 'Alegreya', serif;

`;
const StrongCor = styled.strong`
    color: #445D48;
`

const HomeSection = () => {
    const handleScrollToVideoSection = () => {
        const videoSection = document.getElementById("video-section");
        videoSection.scrollIntoView({ behavior: "smooth" });
      };
      const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("aboutSection");
        aboutSection.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <StyledSection>
      <video src={VideoHomeSection} autoPlay loop muted />
      <div className="content">
        <TitleStyle>
          <StrongCor>Bio</StrongCor>Safe
        </TitleStyle>
        <SloganStyle>O que você está esperando?</SloganStyle>
        <div>
        <button onClick={handleScrollToVideoSection} className="assista-ao-pitch">
            Assista ao pitch
            <span className="play-icon">
              <FaPlayCircle />
            </span>
          </button>
          <button onClick={handleScrollToAbout}>Fale Conosco</button>
        </div>
      </div>
    </StyledSection>
    
  );
};

export default HomeSection;
