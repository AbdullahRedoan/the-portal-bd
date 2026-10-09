import React from "react";
import MainNews from "./components/home/mainNews/MainNews";
import { INews } from "./types/type";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReadNews = data.data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-6">
      <MainNews></MainNews>
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <h2 className="text-2xl font-bold text-[#A80000] mb-4">সর্বাধিক পঠিত</h2>
        <ol className="col-span-1 list-decimal list-inside space-y-4 text-black text-md font-bold ">
          {mostReadNews.map((newsItem: INews, index: number) => (
            <li className="text-lg font-semibold hover:text-[#A80000]">{newsItem.title}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
