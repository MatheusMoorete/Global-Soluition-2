import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5", // Cor de fundo normal
          "&:hover": {
            backgroundColor: "#e0e0e0", // Cor de fundo ao passar o mouse
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Rubik", sans-serif',
        },
      },
    },
  },
});

const AccordionSection = () => {
  const propostas = [
    {
      titulo: "Ênfase no tratamento da saúde",
      descricao:
        "O primeiro passo para a melhoria é criar a ideia de que é importante tratar da saúde, não só das doenças. Para isso, é importante criar campanhas que estimulem as pessoas a serem saudáveis, o que diminui riscos de problemas e, assim, o sistema é desafogado, já que há maior prevenção.",
    },
    {
      titulo: "Uso de dados dos usuários",
      descricao:
        "Outro ponto é usar tecnologia a favor para coletar dados de usuários do sistema público. Isso gera informações de qualidade sobre os tratamentos e tudo mais, melhorando a tomada de decisões e, consequentemente, a gestão do sistema de saúde.",
    },
    {
      titulo: "Atenção Básica mais eficiente",
      descricao:
        "O serviço de Atenção Básica, que trata problemas de saúde de maneira eficiente e rápida, é capaz de desafogar o sistema, resolvendo boa parte dos problemas pelos quais os pacientes vão ao posto de saúde pública. Sendo assim, a proposta é melhorar todo o sistema de atendimento e de infraestrutura da Atenção Básica, resolvendo problemas, por vezes menos sérios, com mais velocidade e sem perder a qualidade.",
    },
    {
      titulo: "Atenção Básica com maior cobertura",
      descricao:
        "Ainda dentro do tema Atenção Básica, aumentar sua abrangência é necessária, a partir do programa Saúde da Família. Com isso, é possível minimizar doenças de crianças e mães, além de melhorar o acompanhamento e tratamento de doenças crônicas, que precisam de uma atenção diferente em relação aos problemas pontuais.",
    },
    {
      titulo: "Processos mais eficientes para diminuição de filas",
      descricao:
        "Não há dúvidas de que a fila de espera é um problema. Pessoas acabam perdendo tempo em seus tratamentos, e isso pode ser fatal. Melhorar a gestão e modernizar os processos e a estrutura de atendimento são elementos essenciais para que este gargalo diminua.",
    },
    {
      titulo: "Transparência na divulgação de informações",
      descricao:
        "Também é importante que o sistema de saúde pública estabeleça claramente os serviços e medicamentos disponíveis para determinado munícipio. Isso cria uma imagem diferente e melhor perante a população e torna a qualidade da assistência mais natural. Afinal, todos os envolvidos sabem exatamente o tamanho e as possibilidades de cobertura para tratamentos.",
    },
    {
      titulo: "Capacidade epidemiológica",
      descricao:
        "a capacidade epidemiológica, de entender e cortar o caminho de infecções contagiosas, também é essencial. Ter a possibilidade de identificar movimentos perigosos à população, relatar e evitar a expansão de doenças é outro passo importante. A proposta é a melhoria da capacidade de identificação, a partir da qualificação das ferramentas de detecção, além da utilização de equipes de alto nível, com nível para antecipar problemas a partir do uso da ciência.",
    },
    {
      titulo: "Utilização dos usuários como forma de melhoria",
      descricao:
        "Outra proposta é colocar o usuário da saúde pública como peça central nas melhorias. A partir da experiência de utilização, é possível que o indivíduo colabore com informações sobre como foi seu atendimento. Com um número relevante de opiniões, faz-se um desenho sobre o que pode ser melhorado. O paciente deve estar incluído nas etapas de melhoria.",
    },
    {
      titulo: "Orientação para contratações com base em resultado",
      descricao:
        "As contratações de insumos e ferramentas para o sistema precisam otimizar resultados. Assim, as cidades podem gastar menos e ter mais qualidade. A solução aqui é pensar em contratos que sempre tenham a saúde da população como centro, a partir de regulações que permitam menos custos e mais soluções.",
    },
    {
      titulo: "Treinamento para profissionais",
      descricao:
        "Por fim, a décima proposta é capacitar os profissionais com mais ênfase. Com melhores práticas, além do trabalho de motivação e capacitação das pessoas, o serviço melhora e, consequentemente, o sistema de saúde pública cresce.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        {propostas.map((proposta, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{proposta.titulo}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{proposta.descricao}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default AccordionSection;
