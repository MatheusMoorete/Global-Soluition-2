import LineChart from "../../components/LineChart";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
  TwoColumnContainer,
} from "../../components/StyledBasics/StyleBasics";
import { FaExternalLinkAlt } from "react-icons/fa";
import MyFooter from '../../components/Footer/MyFooter';

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
        <TwoColumnContainer>
          <p>
            <br></br>
            Entre 1994 e 2017, o Brasil conseguiu reduzir sua taxa de
            mortalidade infantil em 71%. Os índices caíram de 43 bebês mortos
            com menos de um ano de idade a cada mil nascidos vivos – um dos mais
            altos do continente – para 12,4 por mil nascidos vivos, atingindo e
            superando a meta das Nações Unidas com quatro anos de antecedência.
            Um dos fatores por trás desse avanço, foi a implantação da Estratégia Saúde da
            Família (ESF), hoje presente em 98,4% dos municípios brasileiros.
            <br></br>
            <br></br>
            Para muitos brasileiros em áreas pobres e rurais, esse foi o
            primeiro contato com o poder público. Assim, este programa é um dos
            maiores do mundo em termos de visitação domiciliar. É quase como uma
            pequena revolução, porque traz informações sobre cuidados básicos,
            higiene, lavagem das mãos, alimentação e a necessidade das crianças
            de frequentarem a escola, além do pré-natal para as mães. Vê-se,
            portanto, que ao observar o gráfico ao lado, apesar da ainda
            existente disparidade entre as regiões, nos últimos 30 anos houve um
            avanço gritante na redução da mortalidade infantil no país.
          </p>
          <LineChart />
        </TwoColumnContainer>
        <p> Para muitos brasileiros em áreas pobres e rurais, esse foi o
            primeiro contato com o poder público. Assim, este programa é um dos
            maiores do mundo em termos de visitação domiciliar. É quase como uma
            pequena revolução, porque traz informações sobre cuidados básicos,
            higiene, lavagem das mãos, alimentação e a necessidade das crianças
            de frequentarem a escola, além do pré-natal para as mães. Vê-se,
            portanto, que ao observar o gráfico ao lado, apesar da ainda
            existente disparidade entre as regiões, nos últimos 30 anos houve um
            avanço gritante na redução da mortalidade infantil no país.</p>

            <p> Para muitos brasileiros em áreas pobres e rurais, esse foi o
            primeiro contato com o poder público. Assim, este programa é um dos
            maiores do mundo em termos de visitação domiciliar. É quase como uma
            pequena revolução, porque traz informações sobre cuidados básicos,
            higiene, lavagem das mãos, alimentação e a necessidade das crianças
            de frequentarem a escola, além do pré-natal para as mães. Vê-se,
            portanto, que ao observar o gráfico ao lado, apesar da ainda
            existente disparidade entre as regiões, nos últimos 30 anos houve um
            avanço gritante na redução da mortalidade infantil no país.</p>
            <TwoColumnContainer>
            <LineChart/>
            <p> Para muitos brasileiros em áreas pobres e rurais, esse foi o
            primeiro contato com o poder público. Assim, este programa é um dos
            maiores do mundo em termos de visitação domiciliar. É quase como uma
            pequena revolução, porque traz informações sobre cuidados básicos,
            higiene, lavagem das mãos, alimentação e a necessidade das crianças
            de frequentarem a escola, além do pré-natal para as mães. Vê-se,
            portanto, que ao observar o gráfico ao lado, apesar da ainda
            existente disparidade entre as regiões, nos últimos 30 anos houve um
            avanço gritante na redução da mortalidade infantil no país.</p>
            </TwoColumnContainer>
      </PageContainer>
      <MyFooter/>
    </TrasitionPages>

  );
};

export default Tema1;
