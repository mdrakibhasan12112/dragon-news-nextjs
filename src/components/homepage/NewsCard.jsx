import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
// import demo from '@/assets/demo-user.png'

const NewsCard = ({ news }) => {
  console.log(news);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* author details */}
        {/* {console.log(news.author.img)} */}
        <div className="flex justify-between bg-slate-200 p-4">
          <div className="flex items-center gap-2">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <div>
              <p className="text-lg font-semibold">{news.author?.name}</p>
              <p>{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegBookmark className="text-xl font-semibold" />
            <CiShare2 className="text-xl font-semibold" />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <p className='line-clamp-4'>{news.details}</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="flex gap-2 items-center">
              <FaStar className='text-yellow-500' />
              {news.rating.number}
            </p>
            <p className="flex gap-2 items-center">
              <FaEye />
              {news.total_view}
            </p>
          </div>
          <div>
            <Link href={`/news/${news._id}`}>
              <button className="btn">Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
