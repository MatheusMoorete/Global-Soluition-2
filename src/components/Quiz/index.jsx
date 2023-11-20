import React, { useState } from "react";
import { MdReplay } from "react-icons/md";
import {
  Container,
  Pontuacao,
  InfoPerguntas,
  ContagemPerguntas,
  ContagemPerguntasSpan,
  Pergunta,
  GrupoResposta,
  Resposta,
  Button
} from "./styles";
import { Perguntas as PerguntasIniciais } from "../../data/perguntas";

const todasPerguntas = [...PerguntasIniciais];

export default function Quiz() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [repeating, setRepeating] = useState(false);

  function proximaPergunta(correta) {
    const nextQuestion = perguntaAtual + 1;

    if (correta) {
      setPontos(pontos + 1);
    }

    if (nextQuestion < todasPerguntas.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setShowPontuacao(true);
    }
  }

  function reiniciarQuiz() {
    setPerguntaAtual(0);
    setShowPontuacao(false);
    setPontos(0);
    setRepeating(false);
  }

  if (repeating) {
    reiniciarQuiz();
    return null; // Ou qualquer lógica desejada quando estiver reiniciando
  }

  return (
      <Container>
        {showPontuacao ? (
          <Pontuacao>
            <span>Você fez {pontos} pontos</span>
            <Button onClick={() => setRepeating(true)}>
              <MdReplay /> Repeat
            </Button>
          </Pontuacao>
        ) : (
          <>
            <InfoPerguntas>
              <ContagemPerguntas>
                <ContagemPerguntasSpan>Perguntas:</ContagemPerguntasSpan>
              </ContagemPerguntas>
              {perguntaAtual < todasPerguntas.length && (
                <Pergunta>{todasPerguntas[perguntaAtual].pergunta}</Pergunta>
              )}
            </InfoPerguntas>
            <Resposta>
              {perguntaAtual < todasPerguntas.length &&
                todasPerguntas[perguntaAtual].opcoesResposta.map(
                  (opcoesResposta) => (
                    <GrupoResposta key={opcoesResposta.alternativa}>
                      <span>{opcoesResposta.alternativa}</span>
                      <Button
                        onClick={() => proximaPergunta(opcoesResposta.correta)}
                      >
                        {opcoesResposta.resposta}
                      </Button>
                    </GrupoResposta>
                  )
                )}
            </Resposta>
          </>
        )}
      </Container>
  );
}
