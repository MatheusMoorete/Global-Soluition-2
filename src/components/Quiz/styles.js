import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4D4C7D;
  width: 450px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  margin: 100px auto; 
`;
export const ContainerQuiz = styled.div`
  max-width: 100%;
  margin: 170px auto 0; 
  background-color:#363062;
  padding: 100px; 
  color: #fff;;

`;

export const Pontuacao = styled.div`
  display: flex;
  min-height: 200px;
  font-size: 24px;
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
  margin-bottom: 20px;
`;

export const ContagemPerguntasSpan = styled.span`
  font-size: 35px;
`;

export const Pergunta = styled.div`
  margin-bottom: 25px;
`;

export const GrupoResposta = styled.div`
  display: flex;
  flex: 1 1 300px;
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
  font-size: 16px;
  color: #fff;
  background-color: #BA5C12;
  border-radius: 8px;
  padding: 8px;
  border: 3px solid #3E2F5B;
  cursor: pointer;
  margin: 0 12px 10px;

  &:hover {
    background-color: #261132;
  }
`;
export const ButtonReplay = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: #fff;
  background-color: #BA5C12;
  border-radius: 8px;
  padding: 8px;
  border: 3px solid #3E2F5B;
  cursor: pointer;
  margin: 0 12px 10px;

  &:hover {
    background-color: #261132;
  }
`;

