import LineChart from "../../components/LineChart";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
  TwoColumnContainer,
} from "../../components/StyledBasics/StyleBasics";
import { FaExternalLinkAlt } from "react-icons/fa";
import MyFooter from "../../components/Footer/MyFooter";
import BarCharts from "../../components/BarCharts/BarCharts";
import styled from "styled-components";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";

const MarcaTexto = styled.strong`
  background-color: #fdd275;
`;

const Tema1 = () => {
  const scrollThreshold = 100;
  return (
    <TrasitionPages>
      <ButttonScrollToTop scrollThreshold={scrollThreshold} />
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
        <TwoColumnContainer>
          <p>
            <br></br>
            Entre 1994 e 2017, o{" "}
            Brasil conseguiu  <MarcaTexto>
              reduzir sua taxa de mortalidade infantil 
            </MarcaTexto> em 71%
            . Os índices caíram de 43 bebês mortos com menos de um ano de idade
            a cada mil nascidos vivos – um dos mais altos do continente – para
            12,4 por mil nascidos vivos,{" "}
            <MarcaTexto>
              atingindo e superando a meta 
            </MarcaTexto> das Nações Unidas com quatro anos de
              antecedência
            . Um dos fatores por trás desse avanço, foi a implantação da{" "}
            <MarcaTexto>Estratégia Saúde da Família (ESF)</MarcaTexto>, hoje
            presente em 98,4% dos municípios brasileiros.
            <br></br>
            <br></br>
            Para muitos brasileiros em áreas pobres e rurais, esse foi o{" "}
            <MarcaTexto>primeiro contato com o poder público</MarcaTexto> Assim,
            este programa é um dos maiores do mundo em termos de visitação
            domiciliar. É quase como uma pequena revolução, porque traz
            informações sobre cuidados básicos, higiene, lavagem das mãos,
            alimentação e a necessidade das crianças de frequentarem a escola,
            além do pré-natal para as mães. Vê-se, portanto, que ao observar o
            gráfico ao lado, apesar da ainda existente disparidade entre as
            regiões, nos últimos 30 anos houve um{" "}
            <MarcaTexto>
              avanço gritante 
            </MarcaTexto> na redução da mortalidade infantil no país
            .
          </p>
          <LineChart />
        </TwoColumnContainer>
        <p>
          Segundo o gerente de Componentes de Dinâmica Demográfica do IBGE,
          Fernando Albuquerque, <MarcaTexto>a mortalidade caiu em todos os grupos etários</MarcaTexto>,
          mas a redução foi maior nos grupos infantil (até 4 anos) ou
          infantojuvenil (de 5 a 14 anos), por causa de programas do governo
          federal e de organizações não governamentais (ONG) com foco na
          diminuição da mortalidade infantil. Dessa forma, <MarcaTexto>a expectativa de vida
          do brasileiro cresceu 11,24 anos entre 1980 e 2010</MarcaTexto>. O crescimento
          entre as mulheres ficou em 11,69 anos, enquanto entre os homens a
          elevação atingiu 10,59 anos. No mesmo período, na comparação com o
          restante do Brasil, a Região Nordeste foi a que apresentou maior
          aumento na expectativa de vida. As informações fazem parte da pesquisa
          Tábuas de Mortalidade 2010 – Brasil, Grandes Regiões e Unidades da
          Federação, divulgada hoje (2) pelo Instituto Brasileiro de Geografia e
          Estatística (IBGE).
        </p>

        <p>
          {" "}
          Embora tenhamos feito progressos significativos na redução da
          mortalidade infantil, ainda estamos <MarcaTexto>muito atrás das regiões mais
          desenvolvidas</MarcaTexto>. A diferença ainda é perceptível e nos lembra que,
          apesar de nossas conquistas, ainda temos um longo caminho a percorrer.
          A velocidade com que implementamos esses programas de saúde deve ser
          mantida, se não aumentada. Isso é crucial para continuarmos a diminuir
          a lacuna entre nós e as regiões mais desenvolvidas. Afinal, nosso
          objetivo final é garantir que todas as crianças, independentemente de
          onde nasçam, tenham as mesmas oportunidades de sobreviver e
          prosperar..
        </p>
        <TwoColumnContainer>
          <BarCharts />
          <p>
            {" "}
            A <MarcaTexto>taxa de mortalidade infantil (TMI)</MarcaTexto> é o número de mortes de
            crianças menores de um ano de idade em um determinado ano por 1.000
            nascidos vivos no mesmo ano. Esta taxa é frequentemente utilizada
            como um indicador do nível de saúde de um país. A taxa mundial atual
            de mortalidade infantil é de 49,4, segundo as Nações Unidas e 42,09
            de acordo com o CIA World Factbook. E no gráfico ao lado, é possível
            ver a diferença do Brasil em comparação com os países desenvolvidos,
            enquanto a Islandia ocupa o primeiro lugar com o TMI de 1.32, o
            Brasil o décimo terceiro lugar, atrás até mesmo de países da
            America Látina como Equador e Argentina.
          </p>
        </TwoColumnContainer>
      </PageContainer>
      <MyFooter />
    </TrasitionPages>
  );
};

export default Tema1;
