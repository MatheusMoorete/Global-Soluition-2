import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
  MarcaTexto,
} from "../../components/StyledBasics/StyleBasics";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import AccordionSection from "../../components/Accordion/Accordion";
import ImagemOds from "../../imagens/ODS-3.svg";
import ImagemCiclofaixa from "../../imagens/cicloviasp.png";
import ImagemEducacaoSexual from "../../imagens/educacao_sexual.png";
import ImagemCarroEletrico from "../../imagens/carro_eletrico.jpg";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";
import MyFooter from "../../components/Footer/MyFooter"

const StyledNavBanner = styled.section`
  height: 400px;
  display: grid;
  grid-template-columns: 33% 34% 33%;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: white;
  }
  a div {
    background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
    margin: 0;
    padding: 1rem;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  a div h1 {
    margin: 0;
  }
  .ancora__transito {
    background-image: url("${ImagemCiclofaixa}");
    background-size: cover;
  }
  .ancora__reproducao {
    background: center;
    background-image: url(${ImagemEducacaoSexual});
    background-size: cover;
  }
  .ancora__quimicos {
    background: center;
    background-image: url(${ImagemCarroEletrico});
    background-size: cover;
  }
`;

const SectionCinza = styled.section`
  height: 90vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-top: 50px;
  padding-bottom: 50px;
  a {
    color: #e94d10;
  }
  a:hover {
    color: #f17e01;
  }
`;
const SectionAzul = styled.section`
  height: 90vh;
  background-color: #363062;
  color: white !important;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const TituloBranco = styled.span`
  color: white;
`;

const DivTexto = styled.div`
  width: 45%;
`;
const DivTextoGrande = styled.div`
  width: 80%;

  .conteudo {
    margin-top: 20px;
  }
`;

const DivImg = styled.div`
  width: 30%;
  img {
    max-width: 100%;
  }
`;
const DivImgGrande = styled.div`
  width: 40%;
  img {
    max-width: 100%;
  }
`;
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}
const Tema4 = () => {
  const scrollThreshold = 740
  return (
    <TrasitionPages>
      <ButttonScrollToTop scrollThreshold={scrollThreshold} />
      <PageContainer>
        <TitleContainer>
          <StyledTitle>
            <a
              href="https://bvsms.saude.gov.br/bvs/publicacoes/plano_melhoria_saude_guia.pdf"
              target="_blank"
            >
              <strong>Melhoria Geral da Saúde</strong>
              <FaExternalLinkAlt className="link-icon" />
            </a>
          </StyledTitle>
        </TitleContainer>
        <p>
          Em janeiro de 1951, foi fundada a{" "}
          <MarcaTexto>Associação Médica Brasileira (AMB)</MarcaTexto>, uma
          sociedade sem fins lucrativos com o objetivo de defender a dignidade
          profissional do médico e proporcionar assistência de qualidade à saúde
          da população. Com o intuito de aprimorar o cenário geral da saúde no
          país, a AMB adaptou o{" "}
          <MarcaTexto>Plano de Melhoria Geral da Saúde</MarcaTexto> da World
          Health Professions Alliance (WHPA) para ser aplicado no Brasil. O
          plano concentra-se principalmente na redução da incidência de doenças
          crônicas não transmissíveis (DCNTs) em todo o mundo. Trata-se de uma
          ferramenta simples, universal e educativa, que permite a autoavaliação
          e o monitoramento dos fatores de risco relacionados ao estilo de vida.
          A implementação do plano pode ocorrer por meio de organizações de
          profissionais de saúde, em consultas com profissionais da área, em
          campanhas governamentais e por demais interessados.
        </p>
        <p>
          Contudo, um dos principais <MarcaTexto>desafios</MarcaTexto> para a
          evolução de qualquer sociedade é possuir um{" "}
          <MarcaTexto>sistema de saúde pública de qualidade</MarcaTexto>.
          Afinal, este setor é fundamental para toda a população, e é necessário
          que as autoridades trabalhem incessantemente para oferecer os melhores
          serviços possíveis. Assim, surgiram as dez propostas para melhorar a
          saúde brasileira.
        </p>
        <h4>
          <strong>
            As dez propostas que visam a melhoria geral da saúde no Brasil:{" "}
          </strong>
        </h4>
        <AccordionSection />
        <br />
        <br />
      </PageContainer>

      <StyledNavBanner>
        <a className="ancora__transito" href="#transito">
          <div>
            <StyledTitle>Redução de acidentes de trânsito</StyledTitle>
          </div>
        </a>
        <a className="ancora__reproducao" href="#reproducao">
          <div>
            <StyledTitle>
              O acesso universal aos serviços de saúde sexual
            </StyledTitle>
          </div>
        </a>
        <a className="ancora__quimicos" href="#quimicos">
          <div>
            <StyledTitle>Reduzindo a poluição e salvando vidas</StyledTitle>
          </div>
        </a>
      </StyledNavBanner>
      <SectionCinza id="ods">
        <DivTexto>
          <p>
            O terceiro Objetivo de Desenvolvimento Sustentável (ODS) proposto
            pela ONU na Agenda 2030 é{" "}
            <MarcaTexto>
              "Assegurar uma vida saudável e promover o bem-estar para todos, em
              todas as idades"
            </MarcaTexto>
            . Para atingir esse propósito amplo, foram estabelecidas{" "}
            <MarcaTexto>13 metas específicas.</MarcaTexto> Esta ação visa
            desdobrar o escopo abrangente do ODS 3 em metas menores e mais
            direcionadss. Vejamos alguns exemplos:
          </p>
          <ol>
            <li>
                Redução da taxa de mortalidade materna e infantil;
            </li>
            <li>
                Erradicação de epidemias e surtos de doenças transmissíveis;

            </li>
            <li>
                Diminuição da mortalidade por doenças não transmissíveis, por
                meio de investimentos em prevenção e tratamento;

            </li>
            <li>
              Prevenção e tratamento do abuso de substâncias;
            </li>
            <li>Redução de acidentes de trânsito;</li>
            <li>
              Redução do número de mortes causadas por produtos químicos e
              poluição;
            </li>
            <li>
              Asseguramento do acesso universal aos serviços de saúde sexual e
              reprodutiva.
            </li>
          </ol>
          <p>
            Essas metas específicas refletem um compromisso conjunto em direção
            a um futuro global mais saudável e sustentável.
          </p>
        </DivTexto>
        <DivImg>
          <img src={ImagemOds} alt="" />
        </DivImg>
      </SectionCinza>
      <SectionAzul id="luta">
        <DivTextoGrande>
          <TitleContainer>
            <StyledTitle>
              <a
                href="https://www.unodc.org/documents/lpo-brazil/Topics_drugs/Campanha-global-sobre-drogas/leaflet_HEALTHYCOMMUNITITES_PT.pdf"
                target="_blank"
              >
                <strong >
                  <TituloBranco>
                    A Necessidade da Conscientização na Luta contra o Abuso de
                    Substâncias
                  </TituloBranco>
                </strong>
                <FaExternalLinkAlt className="link-icon" />
              </a>
            </StyledTitle>
          </TitleContainer>
          <div className="conteudo">
            <p>
              O <MarcaTexto>abuso de substâncias</MarcaTexto> representa um{" "}
              <MarcaTexto>desafio</MarcaTexto> significativo para a saúde
              pública, afetando milhões de indivíduos em todo o mundo. Este
              problema complexo não apenas{" "}
              <MarcaTexto>
                impacta a saúde física e mental dos usuários
              </MarcaTexto>
              , mas também{" "}
              <MarcaTexto>sobrecarrega os sistemas de saúde</MarcaTexto> e
              contribui para uma variedade de questões sociais. O vício em
              substâncias, sejam elas lícitas ou ilícitas, muitas vezes leva a{" "}
              <MarcaTexto>consequências devastadoras</MarcaTexto>, incluindo
              problemas familiares, perda de emprego e criminalidade. A
              necessidade de abordar esse problema de maneira eficaz é urgente.
            </p>
            <p>
              Uma <MarcaTexto>solução fundamental</MarcaTexto> para combater o
              abuso de substâncias é a{" "}
              <MarcaTexto>
                prevenção por meio da educação e conscientização
              </MarcaTexto>
              . Ao fornecer informações claras sobre os riscos associados ao uso
              indevido de substâncias, podemos capacitar as pessoas a tomar
              decisões informadas sobre seu bem-estar. A conscientização pública
              sobre os recursos disponíveis para tratamento e apoio possui um
              papel vital na criação de uma{" "}
              <MarcaTexto>rede de segurança</MarcaTexto> para aqueles que
              enfrentam desafios relacionados ao abuso de substâncias.
            </p>
            <p>
              Ao investir em estratégias de prevenção baseadas na educação e
              conscientização, podemos criar uma sociedade mais informada e
              resistente aos riscos do abuso de substâncias. Essa abordagem não
              apenas ajuda a{" "}
              <MarcaTexto>reduzir os casos de dependência</MarcaTexto>, mas
              também <MarcaTexto>fortalece as comunidades</MarcaTexto>,
              promovendo uma compreensão mais profunda e compassiva das questões
              relacionadas ao vício.
            </p>
          </div>
        </DivTextoGrande>
      </SectionAzul>
      <SectionCinza id="transito">
        <DivImgGrande>
          <img src={ImagemCiclofaixa} alt="" />
        </DivImgGrande>
        <DivTexto>
          <TitleContainer>
            <StyledTitle>
              <a
                href="https://bikeitau.com.br/blog/a-importancia-das-ciclovias-em-sao-paulo-e-suas-vantagens/"
                target="_blank"
              >
                <strong>
                  Caminho Seguro: A Importância da Infraestruturpara a Redução
                  de Acidentes de Trânsito
                  <FaExternalLinkAlt className="link-icon" />
                </strong>
              </a>
            </StyledTitle>
          </TitleContainer>
          <p>
            A busca pela{" "}
            <MarcaTexto>redução de acidentes de trânsito</MarcaTexto> demanda
            uma abordagem abrangente, e uma peça-chave nesse quebra-cabeça é a
            criação de uma infraestrutura viária segura. A construção de{" "}
            <MarcaTexto>calçadas e ciclovias</MarcaTexto> oferece espaços
            seguros para pedestres e ciclistas, promovendo a mobilidade ativa e
            reduzindo os conflitos no tráfego. Além disso, a{" "}
            <MarcaTexto>manutenção</MarcaTexto> adequada das estradas não apenas{" "}
            <MarcaTexto>prolonga sua vida útil</MarcaTexto>, mas também
            contribui para a <MarcaTexto>prevenção de acidentes</MarcaTexto>,
            criando um ambiente de tráfego mais seguro para todos os usuários.
            Investir nessa infraestrutura não apenas salva vidas, mas também
            fortalece a base para uma mobilidade urbana sustentável,
            alinhando-se assim com a meta do ODS3 de reduzir os riscos e
            impactos adversos relacionados ao trânsito.
          </p>
        </DivTexto>
      </SectionCinza>
      <SectionAzul id="quimicos">
        <DivImgGrande>
          <img src={ImagemCarroEletrico} alt="" />
        </DivImgGrande>
        <DivTexto>
          <TitleContainer>
            <StyledTitle>
              <a
                href="https://blog.bb.com.br/carros-eletricos-e-a-mobilidade-sustentavel/"
                target="_blank"
              >
                <strong>
                  <TituloBranco>
                    Energias Renováveis e Veículos Elétricos: Reduzindo a
                    Poluição e Salvando Vidas
                  </TituloBranco>
                  <FaExternalLinkAlt className="link-icon" />
                </strong>
              </a>
            </StyledTitle>
          </TitleContainer>
          <p>
            A promoção de energias renováveis, aliada ao avanço dos veículos
            elétricos, surge como uma solução essencial para atender à meta do
            ODS3 de redução do número de mortes causadas por produtos químicos e
            poluição. Investir em{" "}
            <MarcaTexto>fontes de energia limpa</MarcaTexto> não apenas diminui
            a dependência de combustíveis fósseis, mas também{" "}
            <MarcaTexto>alivia a poluição do ar.</MarcaTexto> Os veículos
            elétricos, impulsionados por essa energia sustentável, desempenham
            um <MarcaTexto>papel crucial</MarcaTexto> na redução das emissões de
            poluentes, contribuindo assim para a criação de comunidades mais
            saudáveis. Essa transição para tecnologias mais limpas não apenas
            atende às demandas ambientais, mas também{" "}
            <MarcaTexto>
              promove um futuro mais seguro e saudável para todos.
            </MarcaTexto>
          </p>
        </DivTexto>
      </SectionAzul>
      <SectionCinza id="reproducao">
        <DivTexto>
          <TitleContainer>
            <StyledTitle>
              <a
                href="https://capricho.abril.com.br/sociedade/programa-de-educacao-sexual-nas-escolas-esta-de-volta-e-isso-e-um-avanco/#:~:text=Nesta%20semana%2C%20o%20governo%20federal,da%20Sa%C3%BAde%20e%20da%20Educa%C3%A7%C3%A3o."
                target="_blank"
              >
                <strong>
                  Construindo Bases para a Educação Sexual para Todos
                  <FaExternalLinkAlt className="link-icon" />
                </strong>
              </a>
            </StyledTitle>
          </TitleContainer>
          <p>
            Promover a saúde sexual e reprodutiva é vital para alcançar o acesso
            universal a serviços essenciais. A implementação de{" "}
            <MarcaTexto>programas educacionais</MarcaTexto> abrangentes sobre
            saúde sexual em <MarcaTexto>escolas e comunidades</MarcaTexto>{" "}
            desempenha um papel crucial nesse cenário. Ao fornecer informações
            claras e inclusivas sobre temas relacionados à sexualidade, esses
            programas capacitam os indivíduos a{" "}
            <MarcaTexto>
              tomarem decisões informadas sobre sua saúde reprodutiva.
            </MarcaTexto>{" "}
            Além de quebrar tabus, a educação sexual contribui para a redução de
            disparidades, permitindo que todos tenham{" "}
            <MarcaTexto>acesso igualitário</MarcaTexto> a serviços que promovem
            a <MarcaTexto>saúde e o bem-estar sexual.</MarcaTexto> Essa
            abordagem não apenas capacita as gerações presentes, mas também
            constrói a base para sociedades mais saudáveis e equitativas no
            futuro.
          </p>
        </DivTexto>
        <DivImgGrande>
          <img src={ImagemEducacaoSexual} alt="" />
        </DivImgGrande>
      </SectionCinza>
      <MyFooter></MyFooter>
    </TrasitionPages>
  );
};

export default Tema4;
