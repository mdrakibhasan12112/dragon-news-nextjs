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
        <h2 className="font-bold text-lg">All Caterogy </h2>
        <ul className="flex flex-col gap-4 mt-6">
          {categories.map(category => {
            return (
              <li
                key={category.category_id}
                className="bg-slate-100 p-2  font-bold text-md text-center rounded-md text-gray-600"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="font-bold text-3xl bg-green-400 col-span-6">
        Dragon News Home
      </div>

      <div className="font-bold text-3xl bg-purple-400 col-span-3">
        Login Whith
      </div>
    </div>
  );
}
