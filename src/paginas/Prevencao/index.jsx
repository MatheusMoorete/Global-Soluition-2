import TextSection from "../../components/TextSection/TextSection";
import QuizSection from "../../components/Quiz";
import { ContainerQuiz } from "../../components/Quiz/styles";
import MyFooter from "./../../components/Footer/MyFooter";



const Tema3 = () => {
  return (
    <>
      <TextSection />
      <ContainerQuiz id="quiz-section">
        <br></br>
        <h1>Cuidando da Saúde: Desafio DCNT</h1>
        <p>
          Bem-vindo ao quiz "Cuidando da Saúde: Desafio DCNT". Teste seus
          conhecimentos sobre a prevenção e tratamento de Doenças Crônicas Não
          Transmissíveis (DCNT) e descubra o quanto você sabe sobre as
          principais causas de mortalidade no Brasil e no mundo. Responda às
          perguntas com base nas informações fornecidas no texto.
        </p>
        <QuizSection />
      </ContainerQuiz>
      <MyFooter />
    </>
  );
};

export default Tema3;
