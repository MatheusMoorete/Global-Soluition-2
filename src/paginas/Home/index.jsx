import React, { useState } from "react";
import styled from "styled-components";
import StyledArrowDown from "../../components/StyledArrow/StyledArrowDown";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  Card,
  Cabecalho,
  Foto,
  Rodape,
  RodapeH4,
  RodapeH5,
  CardContainer,
} from "../../components/Cards/Cards";
import HomeIcons from "../../components/HomeIcons/HomeIcons";
import MyFooter from "../../components/Footer/MyFooter";
import HomeSection from "../../components/HomeSection/HomeSection";

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
  color: #3a525f;
`;

const AboutSection = styled.div`
  background-color: #363062;
  padding: 100px;
  color: #fff;
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
        <HomeSection/>
        <StyledH1 id="video-section">
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
          <StyledArrowDown onClick={handleScrollToAbout} fixed={isArrowFixed} />
        </StyledDiv>
      </div>

      <AboutSection id="aboutSection">
        <h2>Fale Conosco</h2>
        <br></br>
        <br></br>
        <p>
          Exploramos o futuro da saúde através da inovação e tecnologia, destacando
          a importância da prevenção, automação e precisão nos cuidados médicos.
          . Como estudantes da FIAP, estamos tendo a oportunidade de
          imaginar soluções inovadoras para moldar um mun. Este
          desafio reflete nos Objetivos de Desenvolvimento Sustentável (ODS 3)
          da ONU, promovendo acesso à saúde de qualidade e bem-estar para todos.
          Em parceria com a Hapvida NotreDame Intermédica, a maior operadora de
          saúde do Brasil, criamos uma solução que pode auxiliar
          no enfentamento desse desafio e construir um futuro mais
          brilhante na área da saúde.
        </p>
        <CardContainer>
          <Card>
            <Cabecalho>
              <Foto
                src="https://github.com/matheusmoorete.png"
                alt="Foto da Pessoa 1"
              />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Matheus Morete</RodapeH4>
              <RodapeH5>RM12345</RodapeH5>
              <HomeIcons
                linkedinUrl="https://www.linkedin.com/in/seu-nome"
                githubUrl="https://github.com/seu-nome"
              />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto
                src="https://github.com/matheusmoorete.png"
                alt="Foto da Pessoa 1"
              />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Matheus Morete</RodapeH4>
              <RodapeH5>RM12345</RodapeH5>
              <HomeIcons
                linkedinUrl="https://www.linkedin.com/in/seu-nome"
                githubUrl="https://github.com/seu-nome"
              />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto
                src="https://github.com/matheusmoorete.png"
                alt="Foto da Pessoa 1"
              />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Matheus Morete</RodapeH4>
              <RodapeH5>RM12345</RodapeH5>
              <HomeIcons
                linkedinUrl="https://www.linkedin.com/in/seu-nome"
                githubUrl="https://github.com/seu-nome"
              />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto
                src="https://github.com/matheusmoorete.png"
                alt="Foto da Pessoa 1"
              />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Matheus Morete</RodapeH4>
              <RodapeH5>RM12345</RodapeH5>
              <HomeIcons
                linkedinUrl="https://www.linkedin.com/in/seu-nome"
                githubUrl="https://github.com/seu-nome"
              />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto
                src="https://github.com/matheusmoorete.png"
                alt="Foto da Pessoa 1"
              />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Matheus Morete</RodapeH4>
              <RodapeH5>RM12345</RodapeH5>
              <HomeIcons
                linkedinUrl="https://www.linkedin.com/in/seu-nome"
                githubUrl="https://github.com/seu-nome"
              />
            </Rodape>
          </Card>
        </CardContainer>
      </AboutSection>
      <MyFooter />
    </TrasitionPages>
  );
};

export default Home;
