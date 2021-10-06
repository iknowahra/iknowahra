import styled from 'styled-components';
import bgImg from '../assets/Intro.jpg';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: black;
  z-index: 1;
  scroll-snap-type: y mandatory;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  position: relative;
`;

const Header = styled.header`
  position: absolute;
  top: 40%;
  color: ${({ theme }) => theme.colors.gray5};
  z-index: 1;

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
  h1 {
    font-size: ${({ theme }) => theme.fonts.size.title};
  }
  @media (max-width: 1088px) {
    top: 75%;
    left: 0;
  }
`;

const Gradation = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  animation: animatedgradient 4s linear 2s infinite;

  @keyframes animatedgradient {
    0% {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    20% {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    40% {
      background: linear-gradient(
        to right,
        white,
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.main}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    60% {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.sub},
        white
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    80% {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.sub},
        ${({ theme }) => theme.colors.sub}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    100% {
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.sub}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  > img {
    width: 100%;
    height: 100%;
    min-height: 90vh;
    object-fit: cover;
    object-position: right;
    display: block;
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  @media (max-width: 1088px) {
    bottom: 3.5rem;
    left: 90%;
  }
  .mouse {
    width: 1.5rem;
    height: 2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray4};
    border-radius: 50px;
    position: relative;
    &::before {
      content: '';
      width: 0.1rem;
      height: 0.5rem;
      position: absolute;
      left: 50%;
      background-color: ${({ theme }) => theme.colors.gray4};
      animation: wheel 1.5s infinite;
      -webkit-animation: wheel 1.5s infinite;
    }
  }

  @keyframes wheel {
    0% {
      top: 0.2rem;
    }
    50% {
      top: 0.4rem;
    }
    100% {
      top: 0.2rem;
    }
  }

  @-webkit-keyframes wheel {
    0% {
      top: 0.2rem;
    }
    50% {
      top: 0.4rem;
    }
    100% {
      top: 0.2rem;
    }
  }
`;

function Intro() {
  return (
    <Wrap>
      <Container>
        <Header>
          <h2>프론트엔드 개발자</h2>
          <h1>
            <Gradation>조아라</Gradation> 입니다.
          </h1>
        </Header>
      </Container>
      <ImgContainer>
        <img src={bgImg} alt="intro bg" />
      </ImgContainer>
      <ScrollDown>
        <div className="mouse"></div>
      </ScrollDown>
    </Wrap>
  );
}

export default Intro;
