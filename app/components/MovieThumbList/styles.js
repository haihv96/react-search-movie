import styled from 'styled-components';

export const MoviesContainer = styled.div`
  max-height: 580px;
  overflow-y: scroll;
  background-color: #2a2a2a;
  margin-bottom: 20px;
  border-bottom: 8px solid #2a2a2a;
  &::-webkit-scrollbar {
     width: 12px;
  }
  &::-webkit-scrollbar-track {
     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #080808;
    border-radius: 10px;
    outline: 1px solid #b1d1ea;
  }
`;

export const Relative = styled.div`  
  position: relative;
  min-height: 200px;
`;
