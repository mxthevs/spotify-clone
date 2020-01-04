import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 80px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
    margin-left: 7px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img {
    height: 250px;
  }

  strong {
    color: #FFF;
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    font-size: 13px;
    margin-top: 5px;
    color: #B3B3B3;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }
`;
