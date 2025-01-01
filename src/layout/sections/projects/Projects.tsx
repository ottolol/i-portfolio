import styled from "styled-components";
import { Project } from "./project/Project";

export function Projects() {
  return (
    <StyledProjects>
      <h2>Projects</h2>
      <span>Things I’ve built so far</span>
      <Project
        img=""
        title="Project Tile goes here"
        text="This is sample project description random things are here in description
        This is sample project lorem ipsum generator for dummy content"
        techStackText="HTML, JavaScript, SASS, React"
        iconIViewCode="git"
        iconIdLivePreview="twitter"
      />
    </StyledProjects>
  );
}

const StyledProjects = styled.section``;
