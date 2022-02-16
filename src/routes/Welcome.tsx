import styled from "styled-components";
import "animate.css";

import MyProfile from "../assets/myProfile.png";
import pointerDown from "../assets/pointerDown.png";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 8vh 0 0 0;
  background-color: ${({ theme }) => theme.colors.gray6};
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`;

const MyImg = styled.img`
  width: 34rem;
  height: 40rem;
  position: absolute;
  bottom: 4rem;
  right: 4rem;
`;

const Say = styled.div`
  position: absolute;
  top: 40%;
  left: 10rem;
`;

const SayHello = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin: 0.5rem 0;
`;
const SayWelcome = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  line-height: 2.3rem;
  white-space: pre-wrap;

  strong {
    box-shadow: inset 0 -10px 0 ${({ theme }) => theme.colors.lightPink};
  }
`;

const Pointer = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 96vh;
  left: 50%;
  opacity: 0.5;
  animation: slideInDown 2s infinite;
`;

const Icons = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 2rem;
`;

const LinkTo = styled.a`
  cursor: pointer;
  margin: 1rem 0;

  .carbon {
    width: 2.2rem;
    height: 2.2rem;
  }
  .dotty {
    margin-left: 0.1rem;
    width: 2rem;
    height: 2rem;
  }
`;

function Welcome() {
  return (
    <div className="Welcome">
      <Wrap>
        <Container>
          <Say>
            <SayHello>Hello, I'm Ara Jo 🙌🏼</SayHello>
            <SayWelcome>
              I'm a <strong>fullstack web developer</strong> based in Seoul,
              Korea.
            </SayWelcome>
          </Say>
          <MyImg src={MyProfile} />
          <Pointer src={pointerDown} />
        </Container>
        <Icons>
          <LinkTo href="https://github.com/iknowahra" target="_blank">
            <img
              className="carbon"
              src="https://img.icons8.com/carbon-copy/100/000000/github.png"
            />
          </LinkTo>
          <LinkTo href="https://www.linkedin.com/in/ara-jo20/" target="_blank">
            <img
              className="dotty"
              src="https://img.icons8.com/dotty/80/000000/linkedin.png"
            />
          </LinkTo>
          <LinkTo
            href="https://www.instagram.com/ahra_backtokorea/"
            target="_blank"
          >
            <img
              className="dotty"
              src="https://img.icons8.com/dotty/80/000000/instagram-new.png"
            />
          </LinkTo>
          <LinkTo href="https://www.facebook.com/jjoarra/" target="_blank">
            <img
              className="carbon"
              src="https://img.icons8.com/carbon-copy/100/000000/facebook-new.png"
            />
          </LinkTo>
        </Icons>
      </Wrap>
    </div>
  );
}

export default Welcome;
