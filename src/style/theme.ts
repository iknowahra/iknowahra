const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
  },
  size: {
    xxs: '1rem',
    xs: '1.2rem',
    sm: '1.4rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '4rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const colors = {
  main: '#008C4E',
  sub: '#bbe0ce',
  orange: '#f9ae64',
  gray6: '#f2f2f2',
  gray5: '#E5E5E5',
  gray3: '#333333',
  gray4: '#828282',
};

const DefaultTheme = {
  device,
  colors,
  fonts,
};

export default DefaultTheme;
