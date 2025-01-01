import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";

export function Skills() {
  return (
    <StyledSkills>
      <StyledFlexWrapper justifyContent="center">
        <Skill icon={"react"} title={"React"} text={"Some text"} />
      </StyledFlexWrapper>
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  background-color: #e6c7c7;
`;
