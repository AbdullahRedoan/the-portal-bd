import Link from "next/link";
import { INews } from "@/app/types/type";
import React from "react";
import { title } from "process";
const MainNewsTabs = ({ news }: { news: INews[] }) => {
  return (
    <div>
      {news.map((newsItem, index) => {
        return (
          <article className="max-w-md w-full bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200 font-sans">
            <Link href={'./'} className="group block space-y-3">
              {/* Category Tag */}
              <span className="text-xs sm:text-sm font-semibold text-red-700 tracking-wide block">
                {newsItem.category}
              </span>

              {/* Article Title */}
              <h2 className="text-xl sm:text-sm md:text-base font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors">
                {newsItem.title}
              </h2>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default MainNewsTabs;
