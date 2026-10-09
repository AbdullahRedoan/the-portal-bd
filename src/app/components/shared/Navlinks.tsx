import { ICategory, INews } from "@/app/types/type";
import Link from "next/link";

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: ICategory[] = data.data;
  const filteredNavs = navs.filter((n: ICategory) => n.scrapable);
  console.log(data);

  return (
    <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8">
      <Link
        href="/"
        className="text-gray-700 hover:text-gray-900 transition-colors"
      >
        হোম
      </Link>
      {filteredNavs.map((nav: ICategory, i: number) => (
        <Link
          key={i}
          href={`/category/${nav.slug}`}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
