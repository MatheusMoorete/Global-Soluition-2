import LineChart from "../../components/LineChart";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
} from "../../components/StyledBasics/style";
import { FaExternalLinkAlt } from "react-icons/fa"; 

const Tema1 = () => {
  return (
    <TrasitionPages>
      <PageContainer>
        <TitleContainer>
          <StyledTitle>
            <a
              href="https://g1.globo.com/ciencia-e-saude/noticia/2020/03/10/mortalidade-infantil-caiu-mais-rapido-em-municipios-que-implantaram-a-saude-da-familia-do-sus-diz-estudo.ghtml"
              target="_blank"
            >
              <strong>Redução da Mortalidade Infatil</strong>
              <FaExternalLinkAlt className="link-icon" />
            </a>
          </StyledTitle>
        </TitleContainer>
        <p>
          Entre 1994 e 2017, o Brasil conseguiu reduzir sua taxa de
          mortalidade infantil em 71%. Os índices caíram de 43 bebês mortos com
          menos de um ano de idade a cada mil nascidos vivos – um dos mais altos
          do continente – para 12,4 por mil nascidos vivos, atingindo e
          superando a meta das Nações Unidas com quatro anos de antecedência. Um
          dos fatores por trás desse avanço, segundo um relatório divulgado
          nesta terça-feira (10), foi a implantação da Estratégia Saúde da
          Família (ESF), hoje presente em 98,4% dos municípios brasileiros.
        </p>
        <LineChart />
      </PageContainer>

    </TrasitionPages>
  );
};

export default Tema1;
