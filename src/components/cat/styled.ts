import styled from 'styled-components';
import styles, { isStyledComponent } from 'styled-components';

export const Photo = styled.img`
  width: 100%;
  max-width: 350px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid black;
  object-fit: cover;
`;

export const Content = styled.div`
  height: 250px;
`;
export const Name = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
export const Detail = styled.div`
  height: 80px;
  font-size: 13px;
  font-weight: 300;
  color: gray;
  overflow: hidden;
`;
export const Category = styled.div`
  font-size: 12px;
  margin-bottom: 6px;
  a {
    color: gray;
    text-decoration: underline;
  }
`;

export const Thumbnail = styled.div`
  img {
    border-radius: 5px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid black;
  }
`;
