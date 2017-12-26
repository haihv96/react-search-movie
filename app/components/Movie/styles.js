import styled from 'styled-components';
import {FaStar} from 'react-icons/lib/fa';
import noImage from '../../assets/images/noimg.jpg';

export const Thumbnail = styled.img`
  width: 100%;
`;

export const H4 = styled.h4`
  font-weight: bold;
  font-size: 14px;
  padding: 0;
  height: 16px;
  text-transform: uppercase;
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space: nowrap;
  color: #44e2ff;
`;

export const MovieContainer = styled.div`
  width: 100%;
  padding: 2px;
  border: solid 1px #ffffff;
  background-color: #1f1f1f;
  position: relative;
  color: #fff;
  overflow: hidden;
  margin-right: 10px;
  &:hover {
    ${H4} {
        color: #ff3600;
    }
    ${Thumbnail}{
      opacity: 0.6;
    }
    background-color: #404040;
  }
`;

export const MovieGrid = styled.div`
  width: 25%;
  padding: 0 5px;
  display: inline-block;
  margin-bottom: 30px;
  
  @media screen and (max-width: 575px) {
    width: 33.333333%;
  }
  
    @media screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const ThumbnailContainer = styled.div`
  height: 260px;
  position: relative;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 0 5px;
  position: absolute;
  bottom: 0;
  background: #000000;
  opacity: 0.9;
  width: 100%;
`;

export const Title = styled.div`

`;

export const Rate = styled.span`
  position: absolute;
  color: #fff;
  background: #A21D0A;
  font-size: 11px;
  font-weight: bold;
  float: left;
  clear: both;
  padding: 4px;
  right: 4px;
  top: -1px;
  white-space: nowrap;
  display: inline-block;
  opacity: 0.9;

  &:before {
    content: "";
    float: right;
    position: absolute;
    top: 23px;
    right: 0;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #A21D0A;
  }
`;

export const Star = styled(FaStar)`
  position: absolute;
  top: 15px;
  font-size: 11px;
  right: 10px;
  color: orange;
`;

export const MoreInfo = styled.div`
  color: #b7b7b7;
  font-size: 12px;
  font-style: italic;
`;

export const NoImage = styled.div`
  height: 250px;
  background-image: url(${noImage});
`;

export const Bookmark = styled.div`
  color: ${props => props.bookmarked ? 'orange' : 'grey'};
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 26px;
  cursor: pointer;
`;
