import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { StyledNavbar, AnimatedNavLink } from "./HeaderStyles";

const Header = () => {
 return (
   <StyledNavbar variant="dark">
     <Container>
       <AnimatedNavLink className="Home" as={NavLink} to="/">
         Home
       </AnimatedNavLink>
       <Nav className="ms-auto">
         <AnimatedNavLink as={NavLink} to="/Infancia">
           Infância
         </AnimatedNavLink>
         <AnimatedNavLink as={NavLink} to="/Doenças">
           Doenças
         </AnimatedNavLink>
         <AnimatedNavLink as={NavLink} to="/Prevencao">
           Prevenção
         </AnimatedNavLink>
         <AnimatedNavLink as={NavLink} to="/Saude">
           Saúde
         </AnimatedNavLink>
       </Nav>
     </Container>
   </StyledNavbar>
 );
};

export default Header;
