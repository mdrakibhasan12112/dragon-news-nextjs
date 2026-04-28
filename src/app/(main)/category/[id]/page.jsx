import LeftSidebar from '@/components/homepage/LeftSidebar';
import NewsCard from '@/components/homepage/NewsCard';
import RightSidebar from '@/components/homepage/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';
import { BiSolidMessageError } from 'react-icons/bi';

const NewsCaterogyPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, 'paramsId');

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 my-[50px] container mx-auto">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>

      <div className="col-span-6">
        <h2 className="font-bold text-lg mb-6"> Dragon News Home</h2>
        <div className="space-y-4">
          {news.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center p-10 rounded-xl bg-gray-50 shadow-sm">
              {/* Icon */}
              <div className="text-5xl text-gray-500 mb-4">
                <BiSolidMessageError />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-700">
                No News Found
              </h2>

              {/* Description */}
              <p className="text-gray-500 mt-2 max-w-md">
                Sorry! There are no news articles available right now. Please
                check back later or explore other categories.
              </p>

              {/* Button */}
              <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Refresh
              </button>
            </div>
          ) : (
            news.map(n => {
              return <NewsCard key={n._id} news={n}></NewsCard>;
            })
          )}
        </div>
      </div>

      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCaterogyPage;
