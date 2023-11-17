//ESSES CARDS SÃO REUTILIZADO NA PAGINA HOME 
//AQUI É APENAS O STYLED COMPONENTS, DEIXEI EM UM COMPONENTE SEPARADO PARA NÃO POLUIR 

import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 100px 0;
  color: #e9ffc2;
`;

export const Card = styled.div`
  width: 250px;
`;

export const Cabecalho = styled.div`
  background-color: #ffc155;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.322);
`;

export const Foto = styled.img`
  width: 100px;
  border-radius: 50%;
  position: relative;
  bottom: -50px;
  right: -80px;
`;

export const Rodape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff2cc;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.274);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;
`;

export const RodapeH4 = styled.h4`
  color: #3a525f;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
`;

export const RodapeH5 = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #8399a5;
  padding: 0 16px;
  display: flex;
  align-items: center; /* Alinha o ícone com o texto */
`;

export const LinkedInIcon = styled(FaLinkedin)`
  margin-left: 8px; /* Adiciona espaço à esquerda do ícone para separá-lo do texto */
`;
