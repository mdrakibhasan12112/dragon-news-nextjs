import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories,activeId}) => {
 return (
   <div>
     <h2 className="font-bold text-lg">All Caterogy </h2>
     <ul className="flex flex-col gap-4 mt-6">
       {categories.map(category => {
         return (
           <li
             key={category.category_id}
             className={`${activeId === category.category_id ? 'bg-slate-200' : ''} font-bold text-md text-center rounded-md text-gray-600`}
           >
             <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
           </li>
         );
       })}
     </ul>
   </div>
 );
};

export default LeftSidebar;