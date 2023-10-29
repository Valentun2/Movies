import { LinkStyle, HeaderStyle } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <LinkStyle to='/'>Home</LinkStyle>
      <LinkStyle to='movies'>Movies</LinkStyle>
    </HeaderStyle>
  );
};

export default Header;
