import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo_gray.png';

interface ScrollProps {
  isScroll: boolean;
}

interface ModalProps {
  isOpenModal?: boolean;
}

const Wrap = styled.div<ModalProps & ScrollProps>`
  width: 100vw;
  height: 7vh;
  position: fixed;
  margin: 0;
  padding: 0;
  z-index: 4;

  img {
    display: ${({ isScroll }) => (isScroll ? 'none' : 'block')};
    ${({ isOpenModal, theme }) =>
      isOpenModal &&
      `display:block;
      position:absolute;
      top:1rem;
      right:11.5rem;
      z-index:19;
      width: 3.5rem;
      height: auto;`}
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

const Trigger = styled.button<ModalProps & ScrollProps>`
  color: ${({ isOpenModal, theme }) =>
    isOpenModal ? theme.colors.gray4 : theme.colors.gray5};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  z-index: 20;
  ${({ isScroll }) =>
    isScroll
      ? `
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  `
      : 'display:none'};
`;

const Tabs = styled.nav<ModalProps & ScrollProps>`
  ${({ isOpenModal, theme }) =>
    isOpenModal &&
    `z-index: 10;
  position: fixed;
  background-color: ${theme.colors.gray5};
  box-shadow: 0.8px 0 0.8px ${theme.colors.gray3};
  height: 100vh;
  width: 20%;
  top: 0;
  right: ${isOpenModal && '0'};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 6rem 2rem;
  transition: all 0.8s;`}
  a {
    color: ${({ theme }) => theme.colors.gray4};
    display: ${({ isScroll }) => (isScroll ? 'none' : '')};
    ${({ isOpenModal, theme }) =>
      isOpenModal
        ? `display: flex;
          flex-direction: column;
          margin-top: 1rem;`
        : `
          font-size: ${theme.fonts.size.xsm};
          font-weight: 500;
          margin-left: 1rem;`};
  }

  a:hover {
    color: ${({ theme, isOpenModal }) =>
      isOpenModal ? theme.colors.gray3 : theme.colors.gray5};
  }
`;

const ModalHelper = styled.div<ModalProps>`
  display: ${({ isOpenModal }) => (isOpenModal ? 'block' : 'none')};
  z-index: 5;
  position: fixed;
  height: 100vh;
  width: 80%;
  top: 0;
  left: 0;
  right: ${({ isOpenModal }) => (isOpenModal ? '0' : '30rem')};
  flex-direction: column;
`;

function Intro() {
  const [isScroll, setScroll] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    });
  }, []);
  return (
    <Wrap isScroll={isScroll} isOpenModal={isOpenModal}>
      <Container>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <Trigger
          isScroll={isScroll}
          isOpenModal={isOpenModal}
          onClick={() => setOpenModal((p) => !p)}
        >
          <i className={isOpenModal ? 'xi-close' : 'xi-bars'} />
        </Trigger>
        <Tabs isScroll={isScroll} isOpenModal={isOpenModal}>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Skills</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </Tabs>
        <ModalHelper
          isOpenModal={isOpenModal}
          onClick={() => setOpenModal(false)}
        />
      </Container>
    </Wrap>
  );
}

export default Intro;
