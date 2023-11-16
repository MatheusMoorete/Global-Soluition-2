import styled from "styled-components";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import MySwiper from "../../components/Swiper/Swiper";

import ImagemDengue from "../../imagens/dengue.png";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
`;
const StyledTitle = styled.h1`
  a {
    text-decoration: none;
    color: inherit;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px; /* Ajuste conforme necessário */
      width: 100%;
      border-bottom: 2px solid transparent;
      transition: border-color 0.3s ease-in-out;
    }

    &:hover {
      &:before {
        border-color: #000; /* Substitua pelo seu esquema de cores */
      }
    }
  }
`;



const Tema2 = () => {
  const cards = [
    {
      title: "Arboviroses",
      image: ImagemDengue,
      description:
        "Arboviroses são doenças causadas por vírus transmitidos, principalmente, por mosquitos. As arboviroses mais comuns em ambientes urbanos são: Dengue, Chikungunya e Zika, transmitidas pelo mosquito Aedes aegypti.",
      link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/doencas_e_agravos/index.php?p=266741", // Adicionado o link aqui
    },
    {
      title: "Tuberculose",
      image: "https://www.prosaude.org.br/wp-content/uploads/2021/03/Tuberculose-1.jpg",
      description:
        " Tuberculose é causada pela bactéria Mycobacterium tuberculosis . A transmissão ocorre por via aérea, através de gotículas expelidas durante a tosse ou espirro de uma pessoa infectada. ",
      link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tuberculose", // Adicionado o link aqui
    },
    {
      title: "Hepatites Virais",
      image: "https://i.em.com.br/z-xJI8OVxpt39hYnqsjWwOOocBw=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/30/1500485/ilustracao-de-um-figado-humano_1_50519.png",
      description:
        "As Hepatites A, B e C são inflamações no fígado causadas por diferentes tipos de vírus. Os tipos B e C podem causar doenças graves como cirrose e câncer e todos os tipos de hepatite podem levar à morte.",
      link: "http://antigo.aids.gov.br/pt-br/publico-geral/hv/o-que-sao-hepatites-virais", // Adicionado o link aqui
    },
    {
      title: "Arboviroses",
      image: ImagemDengue,
      description:
        "Arboviroses são doenças causadas por vírus transmitidos, principalmente, por mosquitos. As arboviroses mais comuns em ambientes urbanos são: Dengue, Chikungunya e Zika, transmitidas pelo mosquito Aedes aegypti.",
      link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/doencas_e_agravos/index.php?p=266741", // Adicionado o link aqui
    },
    {
      title: "Arboviroses",
      image: ImagemDengue,
      description:
        "Arboviroses são doenças causadas por vírus transmitidos, principalmente, por mosquitos. As arboviroses mais comuns em ambientes urbanos são: Dengue, Chikungunya e Zika, transmitidas pelo mosquito Aedes aegypti.",
      link: "https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/doencas_e_agravos/index.php?p=266741", // Adicionado o link aqui
    },

  ];

  return (
    <TrasitionPages>
      <PageContainer>
        <div>
        <StyledTitle><a href="https://pt.wikipedia.org/wiki/Doen%C3%A7a_infecciosa" target="_blank">Combate a doenças transmissíveis</a></StyledTitle>
          <p>
            Na Medicina, uma doença infeciosa ou{" "}
            <strong>doença transmissível </strong>é uma doença ou distúrbio de
            funções orgânicas, causada por um agente infeccioso ou as suas
            toxinas através da transmissão desse agente ou seus produtos, do
            reservatório de uma pessoa ou animal infectado indiretamente, por
            meio de hospedeiro intermediário vegetal ou animal, por meio de um
            vetor, ou através do meio ambiente inanimado.Essencialmente é
            qualquer doença causada por um agente patogênico , em
            contraste com causas externas ou físicas
          </p>
          <MySwiper cards={cards} />
        </div>
      </PageContainer>
    </TrasitionPages>
  );
};

export default Tema2;
