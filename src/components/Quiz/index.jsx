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
  Button,
  ButtonReplay
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
    return null;
  }

  const mensagemPontuacao = () => {
    if (pontos === 1) {
      return "Você fez apenas 1 ponto, porem não desista, releeia o texto e depois volte no quiz";
    } else if (pontos === 2) {
      return "Você fez apenas 2 pontos, porem não desista, releeia o texto e depois volte no quiz";
    } else if (pontos === 3) {
      return "Boa, você fez 3 pontos, mas caso queira fazer os 5, reinicie no botão";
    } else if (pontos === 4) {
      return "Boa, você fez 4 pontos, mas caso queira fazer os 5, reinicie no botão";
    } else if (pontos === 5) {
      return "Parabéns, você acertou todas e conseguiu os 5 pontos.";
    }
  };

  return (
    <Container>
      {showPontuacao ? (
        <Pontuacao>
          <span>{mensagemPontuacao()}</span>
          <ButtonReplay onClick={() => setRepeating(true)}>
            <MdReplay />
          </ButtonReplay>
        </Pontuacao>
      ) : (
        <>
          <InfoPerguntas>
            <ContagemPerguntas>
              <ContagemPerguntasSpan>Quiz</ContagemPerguntasSpan>
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
