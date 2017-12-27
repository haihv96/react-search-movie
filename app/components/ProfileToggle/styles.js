import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NameSpan = styled.div `
  margin: 5px 0 0 5px;
  font-weight: bold;
  font-size: 15px;
`;

export const Flex = styled.span `
  display: flex;
`;

export const Avatar = styled.img `
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

export const Caret = styled.span `
  margin: 17px 0 0 5px;
`;

export const Ul = styled.ul`
  padding: 0;
  border-radius: 0;
`;

export const CustomLink = styled(Link)`
`;

export const Li = styled.li `
  background-color: #fff;
  color: #fff;
  font-size: 14px;
  padding: 5px 2px;
  &:hover {
    background-color: #f1f1f1;
    ${CustomLink} {
      background-color: #f1f1f1;
    }
  }
`;

export const DropDown = styled.a`
  && {
    padding: 10px;
    margin-top: 0;
  }
`;
