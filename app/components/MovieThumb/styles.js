import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MovieThumbContainer = styled.div`
  display: flex;
  padding: 6px 12px;
  width: 100%;
  margin: 3px 0;
  border-bottom: 1px solid #fff;
`;


export const Thumbnail = styled.img`
  width: 80px;
  height: 120px;
  border-radius: 4px;
  border: solid 2px #ffffff;
`;

export const Description = styled.div`
  width: 67%;
  padding: 0 6px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  height: 16px;
  text-transform: uppercase;
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space: nowrap;
`;

export const CustomLink = styled(Link)`
  color: #44e2ff;
  &:hover {
    color: #dacb46;
  }
`;

export const MoreInfo = styled.div`
  color: #fff;
  &:hover {
    color: #fff;
  }
`;
