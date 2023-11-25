import styled from "styled-components";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import MySwiper from "../../components/Swiper/Swiper";
import { FaExternalLinkAlt } from "react-icons/fa";

import MyFooter from "./../../components/Footer/MyFooter";
import { CardSwiperConteudo } from "../../components/CardSwiper/CardSwiperConteudo";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";

//ESTILOS -> ELES DEVERIAM ESTAR NUMA PASTA CHAMADA STYLES.JS MAS OPTEI PRO DEIXAR AQUI POR SEREM POUCOS ESTILOS
const PageContainer = styled.div`
  margin: 0 auto 200px;
  max-width: 90%;
`;
const StyledTitle = styled.h1`
  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-3px);
    }
  }

  .link-icon {
    margin-left: 5px;
    color: #088395;
    font-size: 0.8em;
  }
`;
const TitleContainer = styled.div`
  display: inline-block;
`;
const MarcaTexto = styled.strong`
  background-color: #fdd275;
`;

//CONTEUDO CARDS DO SWIPER
const Tema2 = () => {
  const scrollThreshold = 170;
  return (
    <TrasitionPages>
      <ButttonScrollToTop scrollThreshold={scrollThreshold} />
      <PageContainer>
        <div>
          <TitleContainer>
            <StyledTitle>
              <a
                href="https://pt.wikipedia.org/wiki/Doen%C3%A7a_infecciosa"
                target="_blank"
              >
                <strong>Combate a doenças transmissíveis</strong>
                <FaExternalLinkAlt className="link-icon" />
              </a>
            </StyledTitle>
          </TitleContainer>
          <p>
            Na Medicina, uma doença infeciosa ou{" "}
            <MarcaTexto>doença transmissível</MarcaTexto> é uma doença ou
            distúrbio de funções orgânicas, causada por um agente infeccioso ou
            as suas toxinas através da transmissão desse agente ou seus
            produtos, do reservatório de uma pessoa ou animal infectado
            indiretamente, por meio de hospedeiro intermediário vegetal ou
            animal, por meio de um vetor, ou através do meio ambiente
            inanimado.Essencialmente é{" "}
            <MarcaTexto>
              qualquer doença causada por um agente patogênico
            </MarcaTexto>
            , em contraste com causas externas ou físicas. Abaixo, nos slides,
            há um breve resumo das doenças transmissíveis mais prevalentes no
            Brasil, com o intuito de informar e auxiliar no combate dessas
            mazelas.
          </p>
          <br />
          <MySwiper cards={CardSwiperConteudo} />
        </div>
      </PageContainer>
      <MyFooter> </MyFooter>
    </TrasitionPages>
  );
};

export default Tema2;
