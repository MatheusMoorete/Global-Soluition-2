import TextSection from "../../components/TextSection/TextSection";
import QuizSection from "../../components/Quiz";
import { ContainerQuiz } from "../../components/Quiz/styles";
import MyFooter from "./../../components/Footer/MyFooter";
import { StyledTitle, PageContainer } from "../../components/StyledBasics/StyleBasics";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";



const Tema3 = () => {
  const scrollThreshold = 200;
  return (
    <>
      
      <TextSection />
      <ButttonScrollToTop scrollThreshold={scrollThreshold} />
      <ContainerQuiz>
        <br id="quiz-section"></br>
        <PageContainer>
        <StyledTitle>Cuidando da Saúde: Desafio DCNT</StyledTitle>
        <p>
          Bem-vindo ao quiz "Cuidando da Saúde: Desafio DCNT". Teste seus
          conhecimentos sobre a prevenção e tratamento de Doenças Crônicas Não
          Transmissíveis (DCNT) e descubra o quanto você sabe sobre as
          principais causas de mortalidade no Brasil e no mundo. Responda às
          perguntas com base nas informações fornecidas no texto.
        </p>
        </PageContainer>
        <QuizSection />
      </ContainerQuiz>
      <MyFooter />
    </>
  );
};

export default Tema3;
