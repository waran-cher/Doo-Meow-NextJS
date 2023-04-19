import Link from 'next/link';
import { Category, Detail, Photo, Name, Card, Button } from './styled';

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
    <div className="col-12 col-md-4 p-3 ">
      <Card className=" text-center">
        <Photo src={item.pic} className="photo" />
        <div className="content">
          <Name className="my-3">{item.name}</Name>
          <div className="row">
            <div className="col-4">Age</div>
            <div className="col-4 pr-2">Sex</div>
            <div className="col-4 pr-3">Breed</div>
            <Detail className="col-4">{item.age}</Detail>
            <Detail className="col-4 pr-2">{item.sex}</Detail>
            <Detail className="col-4 pr-4">{item.breed}</Detail>
          </div>
          <Link href={`/cats/${item.id}`}>
            {' '}
            <Button className="btn btn-block mt-4">More Details</Button>{' '}
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default CatCard;
