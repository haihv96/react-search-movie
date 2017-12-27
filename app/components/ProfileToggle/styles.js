import styled from 'styled-components';

export const NameSpan = styled.div `
  margin: 5px 0 0 5px;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
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

export const Li = styled.li `
  &:hover {
    background-color: #47592c;
    color: #fff;
  }
`;

export const DropDown = styled.a`
  && {
    padding: 10px;
    margin-top: 0;
  }
`;
