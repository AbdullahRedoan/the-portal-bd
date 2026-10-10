import React from "react";
import Link from "next/link";
import Image from "next/image";
import { INews } from "@/app/types/type";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  ChevronRight,
  Clock,
  Share2,
  User,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const DetailsPage = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const newsDetails = data.data;
  console.log(newsDetails);
  const date = new Date(newsDetails.firstPublished).toLocaleDateString(
    "bn-BD",
    {
      day: "numeric",
      month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    },
  );

  return (
    <div>
      <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-200">
        {/* Header / Navbar Placeholder */}
        {/* Main Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb Navigation */}

          <div className="grid grid-cols-1 max-w-6xl mx-auto gap-8">
            {/* Left Column: Main Content */}
            <article className=" bg-white  p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              {/* Article Title */}
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
                {newsDetails.title}
              </h1>

              {/* Article Subtitle / Excerpt */}
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                {newsDetails.subtitle}
              </p>

              {/* Meta Information Bar */}
              <div className="flex flex-wrap items-center justify-between border-y border-gray-200  py-3 mb-6 text-sm text-gray-500 gap-y-2">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <User className="w-4 h-4 text-red-600" />{" "}
                    {newsDetails.source}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>{` ${newsDetails.wordCount} টি শব্দ`}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Save article"
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 transition"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="Share article"
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 transition"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mb-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 ">
                  <Image
                    src={newsDetails.imageUrl}
                    alt={newsDetails.imageUrl}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                {newsDetails.imageCaption && (
                  <p className="mt-2 text-sm text-gray-500 italic text-center">
                    {newsDetails.imageCaption}
                  </p>
                )}
              </div>

              {/* Article Dynamic Content Blocks */}
              <div className="prose prose-lg max-w-none space-y-6 text-gray-800 leading-relaxed">
                {newsDetails.body.map((block, idx) => {
                  if (block.type === "text") {
                    return (
                      <h2
                        key={idx}
                        className="text-md sm:text-lg text-gray-900 mt-8 mb-4 pt-4 border-t border-gray-100 dark:border-gray-700"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "text") {
                    return (
                      <p key={idx} className="text-base sm:text-lg leading-8">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "image" && block.url) {
                    return (
                      <figure key={idx} className="my-6">
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <Image
                            src={block.url}
                            alt={block.altText || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {block.subheading && (
                          <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center italic">
                            {block.subheading}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                  if (block.type === "blockquote") {
                    return (
                      <blockquote
                        key={idx}
                        className="border-l-4 border-red-600 pl-4 py-2 my-6 italic bg-red-50 dark:bg-red-950/20 text-gray-700 dark:text-gray-300 rounded-r-md"
                      >
                        <p className="m-0 text-base sm:text-lg">{block.text}</p>
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Social Share Footer */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <span className="font-semibold text-gray-700 text-sm">
                  শেয়ার করুন:
                </span>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition">
                    <FaFacebook className="w-4 h-4" /> ফেসবুক
                  </button>
                  <button className="flex items-center gap-2 bg-sky-500 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-sky-600 transition">
                    <FaTwitter className="w-4 h-4" /> টুইটার
                  </button>
                  <button className="flex items-center gap-2 bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-800 transition">
                    <FaLinkedin className="w-4 h-4" /> লিংকডইন
                  </button>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailsPage;
