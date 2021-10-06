import styled from 'styled-components';
import laptopMonitor from '../../assets/laptop_monitor.png';
import laptopBody from '../../assets/laptop_body.png';
import phoneBody from '../../assets/mockup_phone.png';
import bg from '../../assets/portfolio_green.jpg';
import { useEffect, useState } from 'react';

interface ScrollProps {
  scrollActive: boolean | undefined;
}

const Wrap = styled.div`
  width: 100vw;
  height: 300vh;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 0;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: unset;
  position: relative;
`;

const Header = styled.header`
  z-index: 1;
  position: absolute;
  top: 3rem;
  left: 3rem;
  width: 12rem;
  height: 2.2rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 0.5rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.sub};
  border: 1px solid ${({ theme }) => theme.colors.sub};

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.sub};
    border: transparent;
  }
  @media (max-width: 1088px) {
    top: 2rem;
    left: 0;
  }
`;
const LaptopSticky = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 3;
  margin: auto;
  @media (max-width: 1088px) {
    display: none;
  }
`;
const LaptopWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  perspective: 1000;
`;

const LaptopContainer = styled.div<ScrollProps>`
  display: block;
  width: 100%;
  height: 69%;
  max-width: 875px;
  height: 476px;
  background: url(${laptopMonitor}) no-repeat;
  background-size: 100%;
  transform: rotateX(-45deg) translateY(200px) translateZ(-200px);
  transform-style: preserve-3d;

  ${({ scrollActive }) =>
    scrollActive
      ? `animation: flipUp 9s forwards;`
      : `animation: flipDown 6s forwards;`}

  @keyframes flipUp {
    from {
      transform: rotateX(-45deg) translateY(200px) translateZ(-200px);
    }
    to {
      transform: rotateX(0deg) translateY(0px) translateZ(0px);
    }
  }

  @keyframes flipDown {
    from {
      transform: rotateX(0deg) translateY(0px) translateZ(0px);
    }
    to {
      transform: rotateX(-45deg) translateY(200px) translateZ(-200px);
    }
  }
  @media (max-width: 1088px) {
    display: none;
  }
`;

const LaptopBodyContainer = styled.div<ScrollProps>`
  > img {
    width: 100%;
    max-width: 875px;
    height: auto;
    transform: translateY(-87px) translateZ(-300px);
    ${({ scrollActive }) =>
      scrollActive
        ? `animation: flip 5s forwards;`
        : `animation: flipDown 2s forwards;`}
    @keyframes flip {
      from {
        transform: translateY(-87px) translateZ(-300px);
      }
      to {
        transform: translateY(0px) translateZ(0px);
      }
    }
    @keyframes flipDown {
      from {
        transform: translateY(0px) translateZ(0px);
      }
      to {
        transform: translateY(-87px) translateZ(-300px);
      }
    }
  }
`;

const PhoneWrap = styled.div`
  display: none;
  @media (max-width: 1088px) {
    width: 70%;
    height: 50%;
    min-width: 281px;
    min-height: 574px;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8rem;
  }
`;

const PhoneContainer = styled.div`
  display: none;
  @media (max-width: 1088px) {
    display: block;
    width: 281px;
    height: 574px;
    background: url(${phoneBody}) no-repeat;
    background-size: 100%;
  }
`;

const IframeContainer = styled.div`
  position: relative;
  top: 1.3rem;
  left: 6rem;
  border-radius: 0.5rem;
  width: 686px;
  height: 447px;
  border: 1px solid black;
  overflow: hidden;
  > iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1088px) {
    position: relative;
    width: 252px;
    height: 524px;
    top: 0.8rem;
    left: 1rem;
    border-radius: 2rem;
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 46%;
  left: 46%;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: ${({ theme }) => theme.colors.main};
  border-bottom-color: ${({ theme }) => theme.colors.main};
  animation: spinner 1s ease infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 1088px) {
    top: 45%;
    left: 43%;
  }
`;

function Web() {
  const url = 'https://main.d3670zb3ymnhqq.amplifyapp.com/#/';

  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    setScrollY(window.pageYOffset);
    if (scrollY > 700 && scrollY < 2100) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  console.log(scrollY);
  return (
    <Wrap>
      <h2 className="sr-only">Portfolio #1</h2>
      <Container>
        <Header>
          <span>Instagram Web Clone</span>
        </Header>
        <LaptopSticky>
          <LaptopWrap>
            <LaptopContainer scrollActive={scrollActive}>
              <Spinner />
              <IframeContainer>
                <iframe src={url} />
              </IframeContainer>
            </LaptopContainer>
            <LaptopBodyContainer scrollActive={scrollActive}>
              <img src={laptopBody} alt="mockup laptop" />
            </LaptopBodyContainer>
          </LaptopWrap>
        </LaptopSticky>
        <PhoneWrap>
          <PhoneContainer>
            <Spinner />
            <IframeContainer>
              <iframe src={url} />
            </IframeContainer>
          </PhoneContainer>
        </PhoneWrap>
      </Container>
      <img src={bg} alt="portfolio bg" />
    </Wrap>
  );
}

export default Web;
