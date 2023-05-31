/** @format */

import React from "react";
import img1 from "../images/image-about-dark.jpg";
import img2 from "../images/image-about-light.jpg";

function About() {
  return (
    <div className="flex">
      <img src={img1} alt='' />
      <section>
        <h2 className='font-bold tracking-widest p-3 mx-4 mt-5'> ABOUT OUR FURNITURE</h2>
        <h4 className='text-accent   p-4 mt-4'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </h4>
      </section>
      <img src={img2} alt='' className="img2"/>
    </div>
  );
}

export default About;
