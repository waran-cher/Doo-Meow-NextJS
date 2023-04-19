import styled from 'styled-components';
import styles, { isStyledComponent } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;

export const Photo = styled.img`
  width: 100%;
  max-width: 536px;
  height: 250px;
  border-radius: 5px 5px 0px 0px;
  object-fit: cover;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
export const Detail = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: gray;
  overflow: auto;
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

export const Button = styled.button`
  height: 50px;
  border-radius: 0px 0px 5px 5px;
  color: white;
  background-color: #9ba17b;
  &:hover {
    color: white;
    background-color: #878c6a;
  }
`;
