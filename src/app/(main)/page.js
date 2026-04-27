import LeftSidebar from '@/components/homepage/LeftSidebar';
import RightSidebar from '@/components/homepage/RightSidebar';
import Image from 'next/image';

const getCategories =async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
}


export default async function Home() {
  const categories = await getCategories()
  console.log(categories);
  return (
    <div className="grid grid-cols-12 gap-4 my-[50px] container mx-auto">
      <div className=" col-span-3">
       <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
      </div>

      <div className="font-bold text-3xl bg-green-400 col-span-6">
        Dragon News Home
      </div>

      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
