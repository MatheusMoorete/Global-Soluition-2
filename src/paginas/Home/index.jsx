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
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";

import ViniImagem from "../../imagens/Vini.png";
import MatheusImagem from "../../imagens/Matheus.png";
import LucasImagem from "../../imagens/Lucas.jpeg";
import OliverImagem from "../../imagens/Oliver.jpg";
import JoaoImagem from "../../imagens/Joao.jpg";

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
  padding: 2rem;
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

  const scrollThreshold = 670; // para ajustar onde o botão de scroll to top vai ser renderizado
  return (
    <TrasitionPages>
      <ButttonScrollToTop scrollThreshold={scrollThreshold} />
      <HomeSection />
      <StyledH1 id="video-section"></StyledH1>
      <StyledDiv>
        <iframe
          width="1100"
          height="550"
          src="https://www.youtube.com/embed/zyi6AvbFftk?si=M2mAIqM4lRdwg0eZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <StyledArrowDown onClick={handleScrollToAbout} fixed={isArrowFixed} />
      </StyledDiv>

      <AboutSection id="aboutSection">
        <h2>Fale Conosco</h2>
        <br></br>
        <br></br>
        <p>
          Exploramos o futuro da saúde através da inovação e tecnologia,
          destacando a importância da prevenção, automação e precisão nos
          cuidados médicos. . Como estudantes da FIAP, estamos tendo a
          oportunidade de imaginar soluções inovadoras para moldar um mun. Este
          desafio reflete nos Objetivos de Desenvolvimento Sustentável (ODS 3)
          da ONU, promovendo acesso à saúde de qualidade e bem-estar para todos.
          Em parceria com a Hapvida NotreDame Intermédica, a maior operadora de
          saúde do Brasil, criamos uma solução que pode auxiliar no enfentamento
          desse desafio e construir um futuro mais brilhante na área da saúde.
        </p>
        <CardContainer>
          <Card>
            <Cabecalho>
              <Foto src={MatheusImagem} alt="Foto Matheus" />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Matheus Morete</RodapeH4>
              <RodapeH5>RM552428</RodapeH5>
              <HomeIcons linkedinUrl="https://www.linkedin.com/in/matheus-moorete/" />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto src={LucasImagem} alt="Foto Lucas" />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Lucas Dalmas</RodapeH4>
              <RodapeH5>RM551178</RodapeH5>
              <HomeIcons linkedinUrl="https://www.linkedin.com/in/lucas-dalmas-984976270/" />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto src={OliverImagem} alt="Foto Oliver" />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Oliver Freire Huth</RodapeH4>
              <RodapeH5>RM551424</RodapeH5>
              <HomeIcons linkedinUrl="https://www.linkedin.com/in/oliver-freire-huth-49b913236/" />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto src={ViniImagem} alt="Foto Vinicius" />
            </Cabecalho>
            <Rodape>
              <RodapeH4>Vinicius Eugênio</RodapeH4>
              <RodapeH5>RM98064</RodapeH5>
              <HomeIcons linkedinUrl="https://www.linkedin.com/in/viniciuseug%C3%AAnio0402/" />
            </Rodape>
          </Card>
          <Card>
            <Cabecalho>
              <Foto src={JoaoImagem} alt="Foto João" />
            </Cabecalho>
            <Rodape>
              <RodapeH4>João Arthur Pajaro</RodapeH4>
              <RodapeH5>RM551272</RodapeH5>
              <HomeIcons linkedinUrl="https://www.linkedin.com/in/jo%C3%A3o-pajaro-34083b289/?trk=contact-info" />
            </Rodape>
          </Card>
        </CardContainer>
      </AboutSection>
      <MyFooter />
    </TrasitionPages>
  );
};

export default Home;
