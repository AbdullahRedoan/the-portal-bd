import NewsCard from '@/app/components/NewsCard';
import { INews } from '@/app/types/type';
import React from 'react';

const CategoryNewsPage = async({ params }: { params: { categoryId: string } }) => {
    const { categoryId } =await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews = data.data;
    console.log(categoryNews);


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                categoryNews.map((newsItem: INews, index: number) => (
                    <NewsCard key={index} news={newsItem} />
                ))
            }
        </div>
    );
};

export default CategoryNewsPage;