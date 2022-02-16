import styled from "styled-components";

interface TitleInterface {
  title: string;
}

const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const Div = styled.div`
  display: block;
  font-weight: ${({ theme }) => theme.fonts.weight.lighter};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  box-shadow: inset 0 -25px 0 ${({ theme }) => theme.colors.lightPink};
  line-height: 55px;
`;

function Title({ title }: TitleInterface) {
  return (
    <Container>
      <Div>{title}</Div>
    </Container>
  );
}

export default Title;
