import Link from 'next/link';
import React from 'react';

const NotFound = () => {
 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
     <div className="text-center">
       <h1 className="text-7xl font-bold text-gray-800">404</h1>
       <h2 className="text-2xl font-semibold mt-4 text-gray-600">
         Page Not Found
       </h2>
       <p className="mt-2 text-gray-500">
         Sorry, the page you are looking for doesn’t exist.
       </p>

       <Link href="/">
         <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
           Go Home
         </button>
       </Link>
     </div>
   </div>
 );
};

export default NotFound;