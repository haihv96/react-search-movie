import styled from 'styled-components';
import {FaStar} from 'react-icons/lib/fa';

export const Bookmark = styled.div`
  color: ${props => props.bookmarked ? 'orange' : 'grey'};
  position: ${props => props.position};
  bottom: 0;
  right: 0;
  font-size: 26px;
  cursor: pointer;
`;
