import styled from "styled-components";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import MySwiper from "../../components/Swiper/Swiper";

import ImagemDengue from "../../imagens/dengue.png";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
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
          <h1>Combate a doenças transmissíveis</h1>
          <p>
            Na Medicina, uma doença infecciosa, doença infeciosa ou{" "}
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
