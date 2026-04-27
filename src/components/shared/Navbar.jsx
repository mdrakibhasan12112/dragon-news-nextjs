import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useAvatar from '@/assets/user.png'

const Navbar = () => {
 return (
  <div className='flex justify-between container mx-auto py-6 text-center'>
   <div></div>
     <ul className='flex gap-4'>
       <li>
         <Link href={'/'}>Home</Link>
       </li>
       <li>
         <Link href={'/about'}>About</Link>
       </li>
       <li>
         <Link href={'/career'}>Career</Link>
       </li>
   </ul>
   
   <div className='flex gap-2'>
    <Image src={useAvatar} alt='Use Avatar' width={40} height={40}></Image>
    <button className='btn bg-black text-white'><Link href={'/login'}>Login</Link></button>
   </div>
   </div>
 );
};

export default Navbar;