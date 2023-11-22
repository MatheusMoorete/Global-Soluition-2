import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
`;
export const StyledTitle = styled.h1`
  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-3px); 
    }
  }

  .link-icon {
    margin-left: 5px;
    color: #088395;
    font-size: 0.8em;
  }
`;
export const TitleContainer = styled.div`
  display: inline-block; 
`;
export const TwoColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
export const MarcaTexto = styled.strong`
  background-color: #fdd275;
`;