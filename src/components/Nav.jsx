/** @format */

import React from "react";

function Nav() {
  return (
    <div className='absolute flex z-30'>
      <h1 className=' text-3xl text-neutral m-2'>room</h1>
      <nav className='m-4'>
        <ul className='flex mx-2'>
          <li className=' mx-2 text-xl text-neutral cursor-pointer'>home</li>
          <li className=' mx-2 text-xl text-neutral cursor-pointer'>shop</li>
          <li className=' mx-2 text-xl text-neutral cursor-pointer'>about</li>
          <li className=' mx-2 text-xl text-neutral cursor-pointer'>contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
