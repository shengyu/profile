import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shengyu</title>
        <meta name="description" content="Shengyu's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <Header>
          <span>Hi, I'm Shengyu.</span>
        </Header>
        <Main>Software Engineer</Main>
      </HomeContainer>
    </div>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header" "main";
  padding: 10rem;
  min-width: 280px;

  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 300px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;
  font-size: 32px;
  height: 48px;
  line-height: 48px;
`;

const Main = styled.div`
  grid-area: main;
  text-align: center;
  height: 500px;
  padding: 2rem;
`;
