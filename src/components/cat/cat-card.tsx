import { useState, useEffect } from 'react';
import { list } from '@/utils/constants';
import Link from 'next/link';
import { Category, Content, Detail, Photo, Thumbnail, Topic } from './styled';

function CatCard({
  item,
}: {
  item: {
    topic: string;
    pic: string;
    detail: string;
    category: { label: string; link: string }[];
    thumbnail: string[];
  };
}) {
  return (
    <div className="my-4">
      <div className="row">
        <div className="col-12 col-sm-3 col-md-5 text-center">
          <Photo src={item.pic} className="photo" />
        </div>
        <div className="col-12 col-sm-9 col-md-7">
          <Content className="content">
            <Topic className="topic">{item.topic}</Topic>
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

            <Thumbnail className="d-flex thumbnail-list ">
              {item.thumbnail.map((img: any) => {
                return <img key={img} src={img} className="img-fluid" />;
              })}
            </Thumbnail>
          </Content>
        </div>
      </div>
    </div>
  );
}

export default CatCard;
