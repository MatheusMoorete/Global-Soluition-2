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

    cursor: pointer;
    transition: background-color 0.3s ease; 

    &:hover {
      background-color: #333; 
    }
    .play-icon {
      margin-left: 8px; /* Espaçamento entre o ícone e o texto */
    }
  }
`;

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
        <h1>
          <strong>BioSafe</strong>
          <p>Essa pagina é só um teste</p>
        </h1>
        <div>
        <button onClick={handleScrollToVideoSection}>
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
