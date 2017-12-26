import styled from 'styled-components';
import Ellipsis from '../../assets/images/Ellipsis.svg';

export const LoadingStyle = styled.div`
  background-image: url(${Ellipsis});
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const LoadingAreaBlackdrop = styled.div`
  background: #9d9d9d;
  height: 100%;
  left: 0;
  opacity: .3;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;
