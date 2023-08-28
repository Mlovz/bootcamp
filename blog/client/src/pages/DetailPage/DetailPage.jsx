import React, { useEffect, useState } from "react";
import cls from "./DetailPage.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const params = useParams();
  console.log(params.id);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(`/article/${params.id}`);
      setData([res.data.article]);
    };

    getArticle();
  });

  return <div></div>;
};

export default DetailPage;
