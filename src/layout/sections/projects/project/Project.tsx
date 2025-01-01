import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { StyledFlexWrapper } from "../../../../components/FlexWrapper";

type ProjectPropsType = {
  img: string;
  title: string;
  text: string;
  techStackText: string;
  iconIdLivePreview: string;
  iconIViewCode: string;
};

export function Project(props: ProjectPropsType) {
  return (
    <StyledProject>
      <Img src={props.img} alt=" " />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <TechStack>
        <TechStackTitle>Tech stack: </TechStackTitle>
        <TechStackText>{props.techStackText}</TechStackText>
      </TechStack>
      <StyledFlexWrapper>
        <LivePreview>
          <Icon iconId={props.iconIdLivePreview} />
          <IconText> - Live Preview</IconText>
        </LivePreview>
        <ViewCode>
          <Icon iconId={props.iconIViewCode} />
          <IconText> - View Code</IconText>
        </ViewCode>
      </StyledFlexWrapper>
    </StyledProject>
  );
}

const StyledProject = styled.div``;

const Img = styled.img``;

const Title = styled.h3``;

const Text = styled.p``;

const TechStack = styled.p``;

const TechStackTitle = styled.span``;

const TechStackText = styled.span``;

const LivePreview = styled.span``;

const ViewCode = styled.span``;

const IconText = styled.span``;
