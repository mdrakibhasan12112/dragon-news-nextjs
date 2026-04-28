import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';

const NewsDetailsPage =async ({ params }) => {
 const { id } = await params;
 console.log(id, 'params');
 const news =await getNewsDetailsById(id)
 console.log(news);
 return (
   <div className="max-w-4xl mx-auto bg-base-100 shadow-sm">
     <div className="card-body">
       {/* author details */}
       {/* {console.log(news.author.img)} */}

       <figure>
         <Image
           src={news.image_url}
           alt={news.title}
           width={300}
           height={300}
           className="w-full"
         />
       </figure>
       <h2 className="card-title mt-4 text-2xl font-bold">{news.title}</h2>

       <p className="">{news.details}</p>

       <div className="flex justify-between items-center">
         <div>
           <Link href={`/category/${news.category_id}`}>
             <button className="btn bg-red-500 text-white">All news in this category</button>
           </Link>
         </div>
    </div>
    
     </div>
   </div>
 );
};

export default NewsDetailsPage;