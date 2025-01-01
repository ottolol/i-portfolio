import styled from "styled-components";
import Photo from "../../../assets/images/photo.jpg";

export function Main() {
  return (
    <div>
      <div>Текст</div>
      <StyledPhoto src={Photo}></StyledPhoto>
    </div>
  );
}

const StyledPhoto = styled.img`
  width: 100px;
  object-fit: cover;
`;
