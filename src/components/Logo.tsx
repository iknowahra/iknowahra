import styled from "styled-components";

interface TitleInterface {
  size?: String;
}

const Title = styled.span<TitleInterface>`
  font-weight: ${({ theme }) => theme.fonts.weight.bolder};
  font-size: ${({ theme, size }) => (size ? size : theme.fonts.size.sm)};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.lightPink},
    ${({ theme }) => theme.colors.lightBlue}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Logo({ size }: TitleInterface) {
  return <Title size={size}>JoAra's Portfolio</Title>;
}

export default Logo;
