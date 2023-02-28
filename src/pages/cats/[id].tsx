import { useState, useEffect } from "react";
import { list } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styled-components";

const Headpic = styles.div`
img{
  text-align: center
  width: 250px;
height: 250px;
border-radius: 10px;
object-fit: cover;
}`;

function CatDetail() {
  const [value, setValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const query = router.query;

    console.log(query.id);
  }, []);

  return (
    <div className="container">
      <Headpic>
        <img src="/pic/IMG_5516.jpg" />
      </Headpic>
      <h1 className="mt-5 text-center">น้องหอมแดง ไตรมาส</h1>
    </div>
  );
}

export default CatDetail;
