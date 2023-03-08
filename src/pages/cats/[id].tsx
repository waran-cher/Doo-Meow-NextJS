import { useState, useEffect } from 'react';
import { ICat, list } from '@/utils/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ContainerDetail = styled.div`
  background-color: white;
  min-height: calc(100vh - 126px);
  border: 1px solid black;
  box-shadow: 10px 10px;
`;

const ContainerHead = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff0ca;
  height: 30px;
  border: 1px solid black;
  border-bottom: none;
  gap: 10px;
  padding: 0.5rem;
  box-shadow: 10px 10px;
`;

const SmallPicture = styled.div`
  img {
    border-radius: 3px;
    width: 200px;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s;
  }
`;

interface CircleProps {
  color: string;
}

const Circle = styled.div<CircleProps>`
  background-color: ${(props) => props.color || 'black'};
  width: 15px;
  height: 15px;
  border-radius: 100px;
  border: 1px solid black;
`;

const Headpic = styled.div`
  background-color: #fff0ca;
  border: 1px solid black;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
const Recommend = styled.div`
  background-color: white;
  border: 1px solid black;
  h5 {
    background-color: #8cb6df;
    max-width: 300px;
    border-radius: 50px;
    border: 1px solid black;
    box-shadow: 2px 2px black;
  }
`;
const Detail = styled.div`
  background-color: white;
  border: 1px solid black;
`;
const Button = styled.div`
  button {
    color: white;
    background-color: #dd7989;
    width: 100px;
    border-radius: 20px;
  }
  button:hover {
    color: white;
    background-color: #b65463;
  }
`;

const DetailInfo = styled.div`
  font-size: 18px;
  line-height: 2;
`;

const Line = styled.div`
  border-bottom: 1px solid grey;
`;

const RecCard = styled.div`
  text-align: center;
  font-size: 22px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

function CatDetail() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState<ICat>();
  const [filteredList, setFilteredList] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    const query: any = router.query;

    const cat = list.find((item) => {
      return item.id == query.id;
    });

    setData(cat);

    const showList = list.filter((item) => {
      return item.id != query.id;
    });

    setFilteredList(showList);
  }, [router.query]);

  useEffect(() => {
    if (like == true) {
      setCount(count + 1);
    } else if (count > 0) {
      setCount(count - 1);
    }
  }, [like]);

  function handleClick() {
    setLike(!like);
  }
  return (
    <div className="container my-5">
      <Link href={'/'}>
        <h5>
          <i className="fa fa-arrow-left"></i> Back
        </h5>
      </Link>
      <ContainerHead className="m-0">
        <Circle color="#FFB4DA"></Circle>
        <Circle color="#7B7AAF"></Circle>
        <Circle color="#D1D184"></Circle>
      </ContainerHead>
      <ContainerDetail className="p-2">
        <div className="row px-3">
          <div className="col-9 pl-0">
            <Headpic className="text-center">
              <img className="img-fluid" src={`/${data?.pic}`} />
            </Headpic>
            <Detail className="mt-2 p-4">
              <h1 className="text-center">
                <b>{data?.name}</b>
              </h1>
              <Button className="d-flex justify-content-end align-items-center">
                <div className="text-secondary">{count} Likes</div>
                <button onClick={handleClick} type="button" className="btn">
                  {like ? (
                    <>
                      <i className="fa fa-thumbs-up"></i>&nbsp; Liked
                    </>
                  ) : (
                    <>
                      <i className="fa fa-thumbs-up"></i>&nbsp; Like
                    </>
                  )}
                </button>
              </Button>
              <Line className="my-3"></Line>
              <div className="row">
                <DetailInfo className="col-12 col-md-4">
                  <b>ข้อมูลทั่วไป</b>
                  <br />
                  อายุ: {data?.age} ขวบ
                  <br />
                  เพศ: {data?.sex}
                  <br />
                  พันธุ์: {data?.breed}
                  <br />
                  สี: {data?.color}
                </DetailInfo>

                <SmallPicture className="col-12 col-md-8 d-flex justify-content-end">
                  {data?.thumbnail.map((img: any) => {
                    return (
                      <a
                        key={img}
                        href={`/${img}`}
                        className="thumbnail"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img key={img} src={`/${img}`} className="img-fluid " />
                      </a>
                    );
                  })}
                </SmallPicture>
              </div>
            </Detail>
          </div>
          <Recommend className="col-3">
            <h5 className="m-3 p-2 text-center">Recommended แมว</h5>

            <RecCard>
              {filteredList.map((item) => (
                <Link key={item.id} href={`/cats/${item.id}`}>
                  <div
                    key={item.id}
                    style={{
                      border: '1px solid grey',
                      borderRadius: '5px',
                    }}
                    className="mb-3"
                  >
                    <img src={`/${item.pic}`} />
                    <div>{item.name}</div>
                  </div>
                </Link>
              ))}
            </RecCard>
          </Recommend>
        </div>
      </ContainerDetail>
    </div>
  );
}

export default CatDetail;
