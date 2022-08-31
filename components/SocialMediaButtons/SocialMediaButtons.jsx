import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import styled from 'styled-components';

function SocialMediaButtons() {
  return (
    <Container>
      <IconWrapper
        href="https://github.com/shengyu"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub size={32} />
      </IconWrapper>
      <IconWrapper
        href="https://www.instagram.com/shengyu.ryu/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram size={32} />
      </IconWrapper>
      <IconWrapper
        href="https://twitter.com/_liushengyu"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter size={32} />
      </IconWrapper>
    </Container>
  );
}

export default SocialMediaButtons;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  margin: 4rem;
  min-width: 160px;
`;

const IconWrapper = styled.a`
  :hover {
    transform: scale(1.2);
  }
`;
