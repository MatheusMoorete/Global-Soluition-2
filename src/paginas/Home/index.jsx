import React, { useState } from "react";
import styled from "styled-components";
import StyledArrow from "../../components/StyledArrow/StyledArrow";
import TrasitionPages from "../../components/Transition/TrasitionPages";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AboutSection = styled.div`
  background-color: #088395;
  padding: 100px; /* Adiciona algum espaçamento interno */
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 100px 0; /* Ajuste na margem superior */
  color: #e9ffc2;
`;

const Card = styled.div`
  border: 3px solid #e9ffc2;
  padding: 20px;
  width: 250px;
  text-align: center;
  border-radius: 10px; /* Adiciona bordas arredondadas */
`;

const PersonPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Faz a foto ficar redonda */
  margin-bottom: 10px;
`;

const Home = () => {
  const [isArrowFixed, setIsArrowFixed] = useState(false);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("aboutSection");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsArrowFixed(scrollPosition > 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TrasitionPages>
      <div>
        <StyledH1>
          <strong>Nome do Projeto</strong>
        </StyledH1>
        <StyledDiv>
          <iframe
            width="960"
            height="480"
            src="https://www.youtube.com/embed/cm2M-qER3QM?si=20mFlG1Yl5FAi-tJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <StyledArrow onClick={handleScrollToAbout} fixed={isArrowFixed} />
        </StyledDiv>
      </div>

      <AboutSection id="aboutSection">
        <h2>Fale Conosco</h2>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          cupiditate perspiciatis quasi officia consectetur eum in modi totam
          quos sunt obcaecati ipsum esse, iste deleniti architecto est facilis
          eligendi dolores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          cupiditate perspiciatis quasi officia consectetur eum in modi totam
          quos sunt obcaecati ipsum esse, iste deleniti architecto est facilis
          eligendi dolores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          cupiditate perspiciatis quasi officia consectetur eum in modi totam
          quos sunt obcaecati ipsum esse, iste deleniti architecto est facilis
          eligendi dolores!
        </p>
        <CardContainer>
          <Card>
            <PersonPhoto
              src="https://github.com/matheusmoorete.png"
              alt="Foto da Pessoa 1"
            />
            <h4>Matheus Morete</h4>
            <p>RM12345</p>
          </Card>
          <Card>
            <PersonPhoto
              src="https://github.com/matheusmoorete.png"
              alt="Foto da Pessoa 1"
            />
            <h4>Matheus Morete</h4>
            <p>RM12345</p>
          </Card>
          <Card>
            <PersonPhoto
              src="https://github.com/matheusmoorete.png"
              alt="Foto da Pessoa 1"
            />
            <h4>Matheus Morete</h4>
            <p>RM12345</p>
          </Card>
          <Card>
            <PersonPhoto
              src="https://github.com/matheusmoorete.png"
              alt="Foto da Pessoa 1"
            />
            <h4>Matheus Morete</h4>
            <p>RM12345</p>
          </Card>
          <Card>
            <PersonPhoto
              src="https://github.com/matheusmoorete.png"
              alt="Foto da Pessoa 1"
            />
            <h4>Matheus Morete</h4>
            <p>RM12345</p>
          </Card>
        </CardContainer>
      </AboutSection>
    </TrasitionPages>
  );
};

export default Home;
