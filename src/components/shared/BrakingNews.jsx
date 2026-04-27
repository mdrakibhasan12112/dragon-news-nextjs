import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    id: 1,
    title: 'New React Course Launched',
    link: '/courses/react',
  },
  {
    id: 2,
    title: 'Next.js Advanced Tutorial Available',
    link: '/courses/nextjs',
  },
  {
    id: 3,
    title: 'Join Our Live Coding Session',
    link: '/events/live',
  },
];

const BrakingNews = () => {
 return (
   <div className="flex bg-gray-200 gap-4 py-4 px-4 container mx-auto">
     <button className="btn bg-red-500">Latest News</button>
     <Marquee pauseOnHover={true} speed={100}>
       {news.map(n => {
         return <span>{n.title}</span>;
       })}
     </Marquee>
   </div>
 );
};

export default BrakingNews;