import Quiz from "../../components/Quiz";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
} from "../../components/StyledBasics/style";
import { FaExternalLinkAlt } from "react-icons/fa"; 

const Tema3 = () => {
  return (
    <TrasitionPages>
      <PageContainer>
        <TitleContainer>
          <StyledTitle>
          <a
              href="https://g1.globo.com/ciencia-e-saude/noticia/2020/03/10/mortalidade-infantil-caiu-mais-rapido-em-municipios-que-implantaram-a-saude-da-familia-do-sus-diz-estudo.ghtml"
              target="_blank"
            >
              <strong>Prevenção e tratamento de doenças não transmissíveis</strong>
              <FaExternalLinkAlt className="link-icon" />
            </a>
          </StyledTitle>
        </TitleContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          repudiandae dolor ipsa dignissimos officiis hic excepturi quidem.
          Similique, recusandae nam, consequatur tempora ea et labore atque,
          iure velit ut nulla.
        </p>
        <Quiz />
      </PageContainer>
    </TrasitionPages>
  );
};

export default Tema3;
