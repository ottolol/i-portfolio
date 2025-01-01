import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Main } from "../sections/main/Main";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export function Header() {
  return (
    <StyledHeader>
      <Menu menuItems={items} />
      <Main />
      <Logo />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
