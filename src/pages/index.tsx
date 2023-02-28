import { useState, useEffect } from "react";
import { list } from "@/utils/constants";
import Link from "next/link";
import CatCard from "@/components/cat/cat-card";

function Home() {
  const [value, setValue] = useState("");
  const [filteredList, setFilteredList] = useState<any[]>([]);

  function onSubmit(e: any) {
    e.preventDefault();
    let query = value;

    const newList = list.filter((item) => {
      return item.topic.includes(query as any);
    });

    setFilteredList(newList);
    setValue("");
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
        <div className="headd mt-5">
          <h1>ดูแมวไหนดี</h1>
        </div>
        <br />
        <form onSubmit={onSubmit}>
          <input
            id="query"
            type="text"
            className="border-0 form-control shadow-none text-center w-100 -color"
            placeholder="พิมพ์ชื่อแมวตรงนี้"
            value={value}
            onChange={onChange}
          />
          <input type="submit" hidden />
          <div className="line"></div>
        </form>

        <Link href="/cats/1">ghfhgvnv</Link>

        {filteredList.map((item) => {
          return <CatCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Home;
