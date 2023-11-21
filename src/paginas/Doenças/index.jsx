import styled from "styled-components";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import MySwiper from "../../components/Swiper/Swiper";
import { FaExternalLinkAlt } from "react-icons/fa"; 

import MyFooter from './../../components/Footer/MyFooter';
import { CardSwiperConteudo } from "../../components/CardSwiper/CardSwiperConteudo";

//ESTILOS
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

//CONTEUDO CARDS DO SWIPER
const Tema2 = () => {
  
  
  return (
    <TrasitionPages>
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
            <strong>doença transmissível </strong>é uma doença ou distúrbio de
            funções orgânicas, causada por um agente infeccioso ou as suas
            toxinas através da transmissão desse agente ou seus produtos, do
            reservatório de uma pessoa ou animal infectado indiretamente, por
            meio de hospedeiro intermediário vegetal ou animal, por meio de um
            vetor, ou através do meio ambiente inanimado.Essencialmente é
            qualquer doença causada por um agente patogênico , em contraste com
            causas externas ou físicas
          </p>
          <br/>
          <MySwiper cards={CardSwiperConteudo} />
        </div>
      </PageContainer>
      <MyFooter> </MyFooter>
    </TrasitionPages>
  );
};

export default Tema2;
