// HomeSection.js
import React from "react";
import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import VideoFundo from "../../assets/pexels-cottonbro-5310966 (2160p).mp4";

const StyledSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

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
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  button {
    margin: 10px; 
    padding: 10px 20px; 
    font-size: 16px;
    background-color: transparent;
    color: white;
    border: 2px solid;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    cursor: pointer;
    transition: background-color 0.3s ease; 

    &:hover {
      background-color: #445d48ac; 
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
      <video src={VideoFundo} autoPlay loop muted />
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
      {/* <div className="overlay"></div> */}
    </StyledSection>
  );
};

export default HomeSection;
