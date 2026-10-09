import React from "react";
import NewsCard from "../../NewsCard";
import { INews } from "@/app/types/type";
import MainNewsTabs from "./MainNewsTabs";

const MainNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const firstNews: INews = mainNews[0];
  console.log(mainNews, firstNews);

  return (
    <div className="col-span-2 grid grid-cols-2 gap-6">
      <NewsCard news={firstNews}></NewsCard>
      <MainNewsTabs news={mainNews.slice(1, 5)}></MainNewsTabs>
    </div>
  );
};

export default MainNews;
