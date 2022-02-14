import styled from "styled-components";

interface PortfolioInterface {
  key: number;
  info: {
    demo: string;
    title: string;
    detail: string;
  };
}

const Demo = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  position: absolute;
  top: 3.5rem;
  left: 0.5rem;
  width: 95%;
  height: 85%;
`;
const WhiteBackground = styled.div`
  position: absolute;
  bottom: 1.9rem;
  left: 0.5rem;
  width: 95%;
  height: 70%;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
  opacity: 0;
  padding: 1rem;
`;

const BlackBackground = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 0.5rem;
  width: 95%;
  height: 84%;
  background-color: black;
  opacity: 0;
`;

const Title = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-size: ${({ theme }) => theme.fonts.size.xsm};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;
const Detail = styled.p``;
const MyFrame = styled.iframe`
  position: absolute;
  top: 10rem;
`;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  border: 3px solid transparent;
  width: 19rem;
  height: 36rem;
  border-radius: 30px;
  margin: auto;
  background-image: linear-gradient(white, white),
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.lightBlue},
      ${({ theme }) => theme.colors.gray5},
      ${({ theme }) => theme.colors.lightPink}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 2px 10px 2px ${({ theme }) => theme.colors.gray4};

  &::before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.gray6};
    width: 3rem;
    height: 0.6rem;
    border-radius: 5rem;
    position: absolute;
    top: 1rem;
    left: 8rem;
    border: 1px solid ${({ theme }) => theme.colors.gray5};
  }

  &:hover ${BlackBackground} {
    opacity: 0.6;
    transition: all 0.5s ease-out;
  }

  &:hover ${WhiteBackground} {
    background-color: white;
    opacity: 1;
    transition: all 0.5s ease-out;
    border-left: 1px solid ${({ theme }) => theme.colors.gray5};
    border-right: 1px solid ${({ theme }) => theme.colors.gray5};
  }

  &:hover ${WhiteBackground}::before {
    content: "";
    display: block;
    width: 3rem;
    height: 0.6rem;
    border-radius: 5rem;
    position: absolute;
    top: -1rem;
    left: 7.5rem;
    background-color: white;
  }

  &:hover ${WhiteBackground}::after {
    content: "";
    display: block;
    width: 4rem;
    height: 0.3rem;
    border-radius: 5rem;
    position: absolute;
    bottom: 0.1rem;
    left: 7rem;
    background-color: black;
  }

  &:hover ${MyFrame} {
    display: none;
  }
`;

function Portfolio({ info }: PortfolioInterface) {
  return (
    <Wrap>
      <Demo src={info.demo} />
      <BlackBackground />
      <WhiteBackground>
        <Title>{info.title}</Title>
        <Detail>{info.detail}</Detail>
      </WhiteBackground>
      <MyFrame src="https://embed.lottiefiles.com/animation/11873"></MyFrame>
    </Wrap>
  );
}

export default Portfolio;
