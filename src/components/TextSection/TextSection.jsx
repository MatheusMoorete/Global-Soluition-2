import { Link } from 'react-scroll';
import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
} from "../../components/StyledBasics/StyleBasics";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import Buttons from "../../components/Buttons/Buttons";


const MarcaTexto = styled.strong`
  background-color: #fdd275;
`;

const TextSection = () => {
    

  return (
    <TrasitionPages id="text-section">
      <PageContainer>
        <TitleContainer>
          <StyledTitle>
            <a
              href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/noticias/?p=201457"
              target="_blank"
            >
              <strong>
                Prevenção e tratamento de doenças não transmissíveis
              </strong>
              <FaExternalLinkAlt className="link-icon" />
            </a>
          </StyledTitle>
        </TitleContainer>
        <br />
        <p>
          As doenças crônicas não transmissíveis –{" "}
          <a href="https://www.saude.df.gov.br/doencas-cronicas-nao-transmissiveis">
            <MarcaTexto>DCNT</MarcaTexto>{" "}
          </a>
          (doenças cardiovasculares, câncer, diabetes e doenças respiratórias
          crônicas),com uma ênfase nas <MarcaTexto>doenças cardivasculares</MarcaTexto>, representam um dos{" "}
          <MarcaTexto>principais desafios de saúde pública</MarcaTexto>, tanto
          pela alta prevalência como pela rapidez com que adquiriram destaque
          como principais causas de morte no Brasil e no mundo. As DCNT têm
          gerado elevado número de mortes prematuras, perda de qualidade de vida
          e ocasionado impactos econômicos negativos para indivíduos, famílias e
          a sociedade em geral. Elas são hoje responsáveis por{" "}
          <MarcaTexto>72% da mortalidade</MarcaTexto> no Brasil e mais
          prevalentes entre as pessoas de baixa renda, por estarem mais expostas
          aos fatores de risco.
        </p>
        <p>
          Com a população exposta a cada vez mais alimentos ultraprocessados,
          temos um <MarcaTexto>cenário agravante</MarcaTexto> de custos
          atrelados ao cuidado e às perdas ocasionadas pelas DCNT e, dessa
          forma, os <MarcaTexto>gastos hospitalares</MarcaTexto> e ambulatoriais
          vêm crescendo de forma expressiva no Brasil nos últimos anos. No
          contexto de recursos limitados e finitos disponíveis, é uma
          necessidade premente o controle das DCNT no país, através do{" "}
          <MarcaTexto>direcionamento de recursos</MarcaTexto> para o custeio de
          programas de promoção de saúde e controle das doenças. Em 2019, o
          gasto anual direto com doenças crônicas não transmissíveis no Brasil
          foi de <MarcaTexto>R$ 6,8 bilhões</MarcaTexto>. Em sua pesquisa, o
          grupo liderado pelo professor Leandro Rezende, da Escola Paulista de
          Medicina da Universidade Federal de São Paulo (EPM/UNIFESP),estimou
          que{" "}
          <MarcaTexto>
            22% desse valor, R$ 1,5 bilhão, podem ser atribuíveis ao excesso de
            peso e obesidade
          </MarcaTexto>
          . Os custos atribuíveis foram mais elevados nas mulheres (R$ 762
          milhões) do que nos homens (R$ 730 milhões).
        </p>
        <p>
          A <MarcaTexto>prevenção e a promoção da saúde</MarcaTexto>, assim como a vigilância e
          assistência, integram as Diretrizes e Recomendações para o Cuidado
          Integral de Doenças Crônicas Não-Transmissíveis (DCNT). Segundo a
          Organização Mundial de Saúde (OMS), um conjunto de fatores de risco é
          responsável pela maioria das mortes por essas doenças. O{" "}
          
            tabagismo, o consumo excessivo de bebidas alcoólicas, as dietas
            inadequadas e <MarcaTexto>principalmente o acesso de peso/obesidade.
          </MarcaTexto>{" "}
          representam 51% dos fatores de morte por DCNT. Todas estão
          relacionadas ao estilo de vida. Ainda de acordo com a OMS, 23%
          referem-se a fatores biológicos, 19% ambientais e 10% à falta de
          assistência médica.
        </p>

        <p>
          Agora, com o conhecimento adquirido nesta leitura, convidamos você a
          testar seus novos insights por meio de um{" "}
          <MarcaTexto>quiz</MarcaTexto>. Clique no botão abaixo, escolha as
          alternativas que julga corretas e busque alcançar a marca dos cinco
          pontos. Caso não obtenha sucesso, não se preocupe, pois terá mais
          chances. Boa sorte!
        </p>
        <br/><br/>
        <Link to="quiz-section" smooth={true} duration={100}>
          <Buttons>Teste o seu conhecimento</Buttons>
        </Link>
      </PageContainer>
    </TrasitionPages>
  );
}

export default TextSection;