import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
  MarcaTexto
} from "../../components/StyledBasics/StyleBasics";
import { FaExternalLinkAlt } from "react-icons/fa";
import AccordionSection from "../../components/Accordion/Accordion";

const Tema4 = () => {
  return (
    <TrasitionPages>
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
          Em janeiro de 1951, foi fundada a <MarcaTexto>Associação Médica Brasileira (AMB)</MarcaTexto>,
          uma sociedade sem fins lucrativos com o objetivo de defender a
          dignidade profissional do médico e proporcionar assistência de
          qualidade à saúde da população. Com o intuito de aprimorar o cenário
          geral da saúde no país, a AMB adaptou o <MarcaTexto>Plano de Melhoria Geral da Saúde</MarcaTexto> da
          World Health Professions Alliance (WHPA) para ser aplicado no Brasil.
          O plano concentra-se principalmente na redução da incidência de
          doenças crônicas não transmissíveis (DCNTs) em todo o mundo. Trata-se
          de uma ferramenta simples, universal e educativa, que permite a
          autoavaliação e o monitoramento dos fatores de risco relacionados ao
          estilo de vida. A implementação do plano pode ocorrer por meio de
          organizações de profissionais de saúde, em consultas com profissionais
          da área, em campanhas governamentais e por demais interessados.
        </p>
        <p>
          Contudo, um dos principais <MarcaTexto>desafios</MarcaTexto> para a evolução de qualquer
          sociedade é possuir um <MarcaTexto>sistema de saúde pública de qualidade</MarcaTexto>. Afinal,
          este setor é fundamental para toda a população, e é necessário que as
          autoridades trabalhem incessantemente para oferecer os melhores
          serviços possíveis. Assim, surgiram as dez propostas para melhorar a
          saúde brasileira.
        </p>
        <h4>
          <strong>
            As dez propostas que visam a melhoria geral da saúde no Brasil:          </strong>
        </h4>
        <AccordionSection />
      </PageContainer>
    </TrasitionPages>
  );
};

export default Tema4;
