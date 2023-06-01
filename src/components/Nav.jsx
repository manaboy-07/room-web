/** @format */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Nav() {
  const [mobileActive, setMobileActive] = useState(false);
  const showMobileNav = () => {
    setMobileActive(true);
  };
  const hideMobileNav = () => {
    setMobileActive(false);
  };
  return (
    <div>
      <div className='hidden md:block'>
        <div className='absolute flex z-30 p-4'>
          <h1 className=' text-3xl text-neutral m-2'>room</h1>
          <nav className='m-4'>
            <ul className='flex mx-2'>
              <li className=' mx-2 text-xl text-neutral cursor-pointer'>
                home
              </li>
              <li className=' mx-2 text-xl text-neutral cursor-pointer'>
                shop
              </li>
              <li className=' mx-2 text-xl text-neutral cursor-pointer'>
                about
              </li>
              <li className=' mx-2 text-xl text-neutral cursor-pointer'>
                contact
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='block md:hidden'>
        <div className=' flex justify-between items-center absolute z-30'>
          <div className='flex justify-center items-center flex-row'>
            <div
              onClick={showMobileNav}
              className='m-6 cursor-pointer btn bg-transparent border-0 outline-none'>
              <AiOutlineMenu className='text-white text-xl' />
            </div>
            <h1 className=' text-3xl text-neutral text-center mb-2 mx-16'>
              room
            </h1>
          </div>
          <div
            className={`  overflow-x-hidden  mobile-nav ${
              mobileActive ? "show" : "hide"
            }`}>
            <div className='flex justify-between items-center mx-2 text-black overflow-x-hidden'>
              <div className="block cursor-pointer  mt-1">
                <li className="list-none text-2xl" onClick={hideMobileNav}>
                <AiOutlineClose/>
                </li>
              </div>
              <div className="flex list-none mx-16 overflow-x-hidden">
                <li className=' mx-2 text-xl  cursor-pointer'>home</li>
                <li className=' mx-2 text-xl  cursor-pointer'>shop</li>
                <li className=' mx-2 text-xl  cursor-pointer'>about</li>
                <li className=' mx-2 text-xl  cursor-pointer'>contact</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
