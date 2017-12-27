import styled from 'styled-components';
import headerBg from '../../assets/images/header-bg.jpg';
import bodyBg from '../../assets/images/body-bg.jpg';
import {FaStar} from 'react-icons/lib/fa';

export const Flex = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background-color: #2a2a2a;
  padding: 20px 10px;
  margin-bottom: 20px;
  color: #fff;
`;

export const Header = styled.div`
  background-color: #080808;
  padding: 10px 10px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;


export const StarIcon = styled(FaStar)`
  color: #ffbc00;
`;

export const Relative = styled.div`
  min-height: 200px;
  position: relative;
`;
