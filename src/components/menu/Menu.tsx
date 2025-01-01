import styled from "styled-components";

export function Menu(props: { menuItems: Array<string> }) {
  return (
    <MenuStyled>
      <ul>
        {props.menuItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </MenuStyled>
  );
}

const MenuStyled = styled.nav`
  ul {
    display: flex;
    gap: 10px;
    list-style: none;
    justify-content: center;
  }
`;
