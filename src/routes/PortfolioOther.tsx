import styled from "styled-components";
import comDemo from "../assets/comDemo.gif";
import kakaoDemo from "../assets/kakaoDemo.gif";
import musicDemo from "../assets/musicDemo.gif";
import Card from "../components/Card";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray6};
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
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
          {data.map((info, idx) => (
            <Card key={idx} info={info} />
          ))}
        </Container>
      </Wrap>
    </div>
  );
}

export default PortfolioOther;
