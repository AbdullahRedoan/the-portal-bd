import { INews } from "@/app/types/type";
import Image from "next/image";
import React from "react";

const NewsCard = ({ news }: { news: INews }) => {
  const { title, description, imageUrl, imageAlt, category, lastPublished } =
    news;

  return (
    <article className="max-w-md w-full bg-white rounded-lg border border-gray-200/80 shadow-sm overflow-hidden font-sans">
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <span className="text-xs font-semibold text-red-700 tracking-wide uppercase">
          {category}
        </span>

        <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug hover:text-red-700 transition-colors cursor-pointer">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Timestamp */}
        <time className="text-xs text-gray-400 font-medium pt-1">
          {lastPublished}
        </time>
      </div>
    </article>
  );
};

export default NewsCard;
