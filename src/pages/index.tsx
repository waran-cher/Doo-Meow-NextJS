import { useState, useEffect } from 'react';
import { list } from '@/utils/constants';
import Link from 'next/link';
import CatCard from '@/components/cat/cat-card';
import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  border: none;
  background-color: white;
  cursor: pointer;
  :focus {
    background-color: white;
  }
`;
const Submitbutton = styled.button`
  width: 80px;
  border-radius: 0px 0px 0px 0px;
  &:hover {
    background-color: #878c6a;
  }
`;

const Head = styled.div`
  max-width: 300px;
  text-align: center;
  h1 {
    font-family: 'Donut';
    text-align: center;
    color: #df7861;
    font-size: 100px;
    font-weight: 100;

    text-shadow: 5px 3px #614124;
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
        <Head className="mt-5 text-center mx-auto ">
          <h1>
            <b>ดูแมวไหนดี</b>
          </h1>
        </Head>
        <br />
        <form onSubmit={onSubmit}>
          <div className="d-flex justify-content-center">
            <div className="input-group w-100">
              <Input
                id="query"
                type="text"
                className="form-control shadow-none text-center rounded-left"
                placeholder="พิมพ์ชื่อแมวตรงนี้"
                value={value}
                onChange={onChange}
              />
              <input type="submit" hidden />
              <Submitbutton
                className="btn bg-green text-white text-center pt-2 rounded-right"
                onClick={onSubmit}
              >
                Enter
              </Submitbutton>
            </div>
          </div>
        </form>

        <div className="row">
          {filteredList.map((item) => {
            return <CatCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
