import styled from "styled-components";
import comDemo from "../assets/comDemo.gif";
import kakaoDemo from "../assets/kakaoDemo.gif";
import musicDemo from "../assets/musicDemo.gif";
import Card from "../components/Card";
import Title from "../components/Title";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray6};
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 6rem);
  justify-content: space-evenly;
  align-items: center;
`;

function PortfolioOther() {
  const data = [
    {
      demo: comDemo,
      title: "Company Hompage",
      detail: "responsive webpage with react.js",
    },
    {
      demo: musicDemo,
      title: "music web application",
      detail: "favorite music lists and music player",
    },
    {
      demo: kakaoDemo,
      title: "kakao clone webpage",
      detail: "html, css practice with kakao cloning",
    },
  ];

  return (
    <div className="PortfolioOther">
      <Wrap>
        <Container>
          <Title title="Other Side Projects" />
          <CardContainer>
            {data.map((info, idx) => (
              <Card key={idx} info={info} />
            ))}
          </CardContainer>
        </Container>
      </Wrap>
    </div>
  );
}

export default PortfolioOther;
