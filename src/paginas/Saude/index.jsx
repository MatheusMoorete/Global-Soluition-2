import TrasitionPages from "../../components/Transition/TrasitionPages"
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
} from "../../components/StyledBasics/StyleBasics";
import { FaExternalLinkAlt } from "react-icons/fa"; 



const Tema4 = () => {
  return (
    <TrasitionPages>
      <PageContainer>
        <TitleContainer>
          <StyledTitle>
            <a
              href="https://g1.globo.com/ciencia-e-saude/noticia/2020/03/10/mortalidade-infantil-caiu-mais-rapido-em-municipios-que-implantaram-a-saude-da-familia-do-sus-diz-estudo.ghtml"
              target="_blank"
            >
              <strong>Melhoria Geral da Saúde</strong>
              <FaExternalLinkAlt className="link-icon" />
            </a>
          </StyledTitle>
        </TitleContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, corporis ipsum fugiat consequuntur nulla pariatur ipsam magni, vitae esse deserunt at quis dolore et natus? Vel deleniti modi nisi mollitia!Similique, corporis ipsum fugiat consequuntur nulla pariatur ipsam magni, vitae esse deserunt at quis dolore et natus? Vel deleniti modi nisi mollitiaSimilique, corporis ipsum fugiat consequuntur nulla pariatur ipsam magni, vitae esse deserunt at quis dolore et natus? Vel deleniti modi nisi mollitiaSimilique, corporis ipsum fugiat consequuntur nulla pariatur ipsam magni, vitae esse deserunt at quis dolore et natus? Vel deleniti modi nisi mollitiaSimilique, corporis ipsum fugiat consequuntur nulla pariatur ipsam magni, vitae esse deserunt at quis dolore et natus? Vel deleniti modi nisi mollitia
        </p>
      </PageContainer>

    </TrasitionPages>
  );
}

export default Tema4