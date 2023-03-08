import { useState, useEffect } from 'react';
import { list } from '@/utils/constants';
import Link from 'next/link';
import { Category, Content, Detail, Photo, Thumbnail, Name } from './styled';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  padding: 20px 20px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px;
`;

function CatCard({
  item,
}: {
  item: {
    id: number;
    name: string;
    pic: string;
    sex: string;
    age: number;
    breed: string;
    color: string;
    detail: string;
    category: {
      label: string;
      link: string;
    }[];
    thumbnail: string[];
  };
}) {
  return (
    <Card className="my-4">
      <div className="row">
        <div className="col-12 col-sm-3 col-md-5 text-center">
          <Photo src={item.pic} className="photo" />
        </div>
        <div className="col-12 col-sm-9 col-md-7">
          <Content className="content">
            <Link href={`/cats/${item.id}`}>
              {' '}
              <Name className="name">{item.name}</Name>{' '}
            </Link>
            <Detail className="detail mb-2">
              {item.detail}
              {/* <a href="#">อ่านต่อ</a> */}
            </Detail>
            <Category className="category">
              หมวด:{' '}
              {item.category.map(
                (category: { label: string; link: string }) => {
                  return (
                    <a
                      key={category.link}
                      className="ml-1"
                      href={category.link}
                    >
                      {category.label}
                    </a>
                  );
                },
              )}
            </Category>
            <Thumbnail className="d-flex ">
              {item.thumbnail.map((img: any) => {
                return <img key={img} src={img} className="img-fluid" />;
              })}
            </Thumbnail>
          </Content>
        </div>
      </div>
    </Card>
  );
}

export default CatCard;
