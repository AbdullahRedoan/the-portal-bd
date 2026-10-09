import { ICategory } from "../../types/type";
import MarqueeText from "react-marquee-text";

const Marqee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines = data.data;
  return (
    <div className="w-full bg-[#A80000] py-2 px-4">
      <MarqueeText direction="right" duration={14}>
        {headlines.map((headline: ICategory, i: number) => {
          return (
            <span key={i} className="text-white">
              <span className="mx-4">{headline.title}</span>
              <span>•</span>
            </span>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marqee;
