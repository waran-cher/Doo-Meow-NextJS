import { useState, useEffect } from 'react';
import { list } from '@/utils/constants';
import Link from 'next/link';
import CatCard from '@/components/cat/cat-card';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border: 1px solid black;
  border-radius: 0px;
  background-color: white;
  :focus {
    background-color: white;
  }
`;

const Head = styled.div`
  background-color: #ffb4da;
  max-width: 300px;
  text-align: center;
  border-radius: 50px;
  border: 1px solid black;
  box-shadow: 5px 5px;
  h1 {
    text-align: center;
    color: black;
    font-size: 45px;
    padding-top: 10px;
  }
`;

function Home() {
  const [value, setValue] = useState('');
  const [filteredList, setFilteredList] = useState<any[]>([]);

  function onSubmit(e: any) {
    e.preventDefault();
    let query = value;

    const newList = list.filter((item) => {
      return item.name.includes(query as any);
    });

    setFilteredList(newList);
    setValue('');
  }

  function onChange(e: any) {
    setValue(e.target.value);
  }

  useEffect(() => {
    setFilteredList(list);
  }, []);

  return (
    <>
      <div className="container">
        <Head className="mt-5 text-center mx-auto">
          <h1>
            <b>ดูแมวไหนดี</b>
          </h1>
        </Head>
        <br />
        <form onSubmit={onSubmit}>
          <Input
            id="query"
            type="text"
            className="form-control shadow-none text-center w-100 -color"
            placeholder="พิมพ์ชื่อแมวตรงนี้"
            value={value}
            onChange={onChange}
          />
          <input type="submit" hidden />
        </form>

        {/* <Link href="/cats/1">ghfhgvnv</Link> */}
        {filteredList.map((item) => {
          return <CatCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Home;
