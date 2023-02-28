import styles from 'styled-components';

export const Photo = styles.img`
  width: 100%;
  max-width: 350px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Content = styles.div`
    height: 250px;
`;
export const Topic = styles.div`
    font-size: 25px;
    font-weight: 700;
`;
export const Detail = styles.div`  
 height: 80px;
    font-size: 14px;
    font-weight: 300;
    color: gray;
    overflow: hidden;
`;
export const Category = styles.div`
font-size: 12px;
  margin-bottom: 6px;
  a{color: gray;
  text-decoration: underline;
  `;

export const Thumbnail = styles.div`  
  img {
  border-radius: 10px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  }
  `;
