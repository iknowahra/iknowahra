import styled, { keyframes } from "styled-components";
import laptopMockup from "../assets/laptopMockup.png";
import webDemo from "../assets/instaWeb.gif";
import Logo from "../components/Logo";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 8vh 0 0 0;
`;

const Container = styled.div`
  width: 80%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MockupLaptop = styled.div`
  width: 1000px;
  height: 700px;
  position: relative;
  > img:first-child {
    position: absolute;
    object-fit: contain;
    top: 10px;
    width: 1000px;
    height: 700px;
  }
  > img:nth-child(2) {
    position: absolute;
    width: 820px;
    height: 460px;
    top: 110px;
    left: 98px;
  }

  > span {
    position: absolute;
    bottom: 75px;
    left: 450px;
  }
`;

const slideOutPink = keyframes`
  0% {bottom: -550px;}
  50%{bottom: -130px;}
  100%{bottom: -650px;}
`;

const slideOutBlue = keyframes`
  0% {top: -200px;}
  50%{top: -100px;}
  100%{top: -300px;}
`;

const DemoAfter = styled.div`
  position: absolute;
  width: 820px;
  height: 460px;
  top: 110px;
  left: 98px;
  opacity: 0;
  padding: 10% 13%;
  overflow: hidden;

  &:hover {
    background-color: black;
    opacity: 0.8;
  }

  &:hover > div {
    color: white;
  }

  &:hover ::before {
    content: "";
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACJJREFUGFdjZEACv0+d/M8I44M4rGbmjGABGAfEZkTmgAQAA5oPkgll5iQAAAAASUVORK5CYII=)
      repeat;
    width: 1300px;
    height: 500px;
    position: absolute;
    animation: ${slideOutPink} 1s linear forwards;
    bottom: -150px;
    right: -450px;
    transform: rotate(-50deg);
  }

  &:hover ::after {
    content: "";
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAB5JREFUGFdjZEADjCB+z7Jz/0uijMBsMIEMUARAKgG1pwcE3B7w+gAAAABJRU5ErkJggg==)
      repeat;
    width: 80px;
    height: 500px;
    position: absolute;
    top: -200px;
    left: 60px;
    z-index: 1;
    animation: ${slideOutBlue} 1s linear forwards;
  }
`;
const DemoTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  margin-bottom: 1rem;

  ::after {
    content: "ddd";
    color: yellow;
    background-size: 100%;
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
  }
`;
const DemoDetail = styled.p`
  line-height: 1.8rem;
  strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

function PortfolioMain() {
  return (
    <div id="PortfolioMain">
      <Wrap>
        <Container>
          <MockupLaptop>
            <img src={laptopMockup} alt="laptop mock up" />
            <img src={webDemo} alt="insta web clone demo" />
            <DemoAfter>
              <div>
                <DemoTitle>Instagram clone WEB / Mobile</DemoTitle>
                <DemoDetail>
                  From sign up to reply posts, I cloned almost every single page
                  of Instagram with <strong>React.js</strong> for web,
                  <strong> React Native</strong> for mobile. This cloning
                  application is floating on the server which was made with
                  <strong> Graphql + Prisma.</strong>
                </DemoDetail>
              </div>
            </DemoAfter>
            <Logo size="16px" />
          </MockupLaptop>
        </Container>
      </Wrap>
    </div>
  );
}

export default PortfolioMain;
