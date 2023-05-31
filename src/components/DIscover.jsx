/** @format */

import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
function DIscover() {
  return (
    <div className='p-12 mt-10 flex flex-col items-center justify-center'>
      <div className=''>
        <h1 className='text-4xl font-bold    text-black  m-5'>
          Discover innovative <br /> ways to decorate
        </h1>
        <h4 className='text-accent max-w-md p-4 mt-9'>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </h4>
        <div className='flex mt-4 cursor-pointer'>
          <h2 className='mx-3 shop'>SHOP NOW</h2>
          <HiArrowLongRight className='text-3xl mx-6 font-bold -mt-1' />
        </div>
      </div>
    </div>
  );
}

export default DIscover;
