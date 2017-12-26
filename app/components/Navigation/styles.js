import styled from 'styled-components';
import navbar from '../../assets/images/header-bg.jpg';

export const Navbar = styled.nav`
  && {
    background-image: url(${navbar});
    background-repeat: repeat-x;
    border-radius: 0;
  }
`;

export const Ul = styled.ul `
  && {
    display: flex
  }
`;
