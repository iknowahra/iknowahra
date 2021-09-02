import styled from 'styled-components';
import logo from '../assets/logo_gray.png';

const Wrap = styled.div`
  width: 100vw;
  height: 7vh;
  border: 1px solid white;
  position: absolute;
  margin: 0;
  padding: 0;
  z-index: 10;

  img {
    width: 3.5rem;
    height: auto;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tabs = styled.div`
  a {
    color: ${({ theme }) => theme.colors.gray4};
    font-size: ${({ theme }) => theme.fonts.size.xsm};
    font-weight: 500;
    margin-left: 1rem;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

function Intro() {
  return (
    <Wrap>
      <Container>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <Tabs>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Skills</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </Tabs>
      </Container>
    </Wrap>
  );
}

export default Intro;
