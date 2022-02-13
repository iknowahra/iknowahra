import styled from "styled-components";
import Logo from "./Logo";

const Wrap = styled.div`
  width: 100vw;
  height: 7vh;
  position: fixed;
  margin: 0;
  padding: 0;
  z-index: 10;
  background-color: black;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.05);
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
    color: ${({ theme }) => theme.colors.gray5};
    font-size: ${({ theme }) => theme.fonts.size.xsm};
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    margin-left: 1rem;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.lightPink};
  }
`;

function Header() {
  return (
    <Wrap>
      <Container>
        <Logo />
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

export default Header;
