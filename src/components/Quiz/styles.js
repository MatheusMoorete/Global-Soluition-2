import styled from 'styled-components';


export const Container = styled.div`
  background-color: #4D4C7D;
  width: 28.125rem;
  min-height: 12.5rem;
  height: min-content;
  border-radius: 0.9375rem;
  padding: 2.5625rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0.125rem 0.25rem, rgba(0, 0, 0, 0.3) 0px 0.4375rem 0.8125rem -0.1875rem, rgba(0, 0, 0, 0.2) 0px -0.1875rem 0px inset;
  margin: 5rem auto; 
`;

export const ContainerQuiz = styled.div`
  max-width: 100%;
  margin: 8.75rem auto 0; 
  background-color: #363062;
  padding: 3.125rem; 
  color: #fff;
`;

export const Pontuacao = styled.div`
  display: flex;
  min-height: 12.5rem;
  font-size: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoPerguntas = styled.div`
  width: 100%;
  position: relative;
`;

export const ContagemPerguntas = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 1.25rem;
`;

export const ContagemPerguntasSpan = styled.span`
  font-size: 2.1875rem;
`;

export const Pergunta = styled.div`
  margin-bottom: 1.5625rem;
`;

export const GrupoResposta = styled.div`
  display: flex;
  flex: 1 1 18.75rem;
  justify-content: center;
  align-items: baseline;
`;

export const Resposta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  font-size: 1rem;
  color: #fff;
  background-color: #BA5C12;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 0.1875rem solid #3E2F5B;
  cursor: pointer;
  margin: 0 0.75rem 0.625rem;

  &:hover {
    background-color: #261132;
  }
`;

export const ButtonReplay = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  background-color: #BA5C12;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 0.1875rem solid #3E2F5B;
  cursor: pointer;
  margin: 0 0.75rem 0.625rem;

  &:hover {
    background-color: #261132;
  }
`;
