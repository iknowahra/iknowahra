import Lottie from 'react-lottie-player';
import styled from 'styled-components';

interface LottieProps {
  animationData: any;
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const MyLottie = styled(Lottie)<LottieProps>``;

function Touch() {
  const url = 'https://assets10.lottiefiles.com/packages/lf20_jfchliut.json';
  return (
    <Wrap>
      <MyLottie play animationData={url} loop />
    </Wrap>
  );
}
export default Touch;
