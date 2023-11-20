import TextSection from "../../components/TextSection/TextSection";
import QuizSection from "../../components/Quiz";
import { ContainerQuiz } from "../../components/Quiz/styles";
import MyFooter from './../../components/Footer/index';

const Tema3 = () => {
  return (
    <>
      <TextSection />
      <ContainerQuiz id="quiz-section">
        <br></br>
        <h1>Algum Titulo (talvez)</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          eos, maxime nam magnam, iusto optio, sit dolorem nemo velit voluptate
          laborum perspiciatis! Eligendi impedit laudantium unde cupiditate
          dignissimos ut dolore.
        </p>
        <QuizSection />
      </ContainerQuiz>
      <MyFooter></MyFooter>
    </>
  );
};

export default Tema3;
