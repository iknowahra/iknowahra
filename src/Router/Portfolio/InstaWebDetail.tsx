import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.main};
`;
function WebDetails() {
  return <Wrap></Wrap>;
}

export default WebDetails;
