import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import nextjs from '../assets/nextjs.png';

const Skills = () => {
  return (
    <div className='bg-black -mt-4  md:mx-9 '>
     <div className='text-center '>
 <h2 className="text-red-400 text-2xl md:text-5xl font-bold m-4 pt-8 underline">
        My  Skils  Stack
      </h2>
      </div>
      <br /><br />
    <div className="bg-inherit text-lime-500 md:h-[150px] max-w-[1200px] mx-auto  grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
    
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] font-serif">
  <img src={html} alt="" />
  <p className="mt-2">HTML</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={css} alt="" width={100} height={100} />
  <p className="mt-2">CSS</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={javascript} alt="" width={100} height={100} />
  <p className="mt-2">JAVASCRIPT</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={tailwind} alt="" width={100} height={100} />
  <p className="mt-2">TAILWIND</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={react} alt="" width={100} height={100} />
  <p className="mt-2">REACT.JS</p>
</div>
<div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={nextjs} alt="" width={100} height={100} />
  <p className="mt-2">NEXT.JS</p>
</div>
</div>
<br />
<div>
     <p className='text-white px-10 font-semibold text-lg'>
     "I'm a dedicated front-end developer with expertise in HTML, CSS, JavaScript, React.js, and Next.js. I specialize in creating responsive, high-performance web applications with a focus on clean design and seamless user experiences. My goal is to continuously improve and deliver efficient, scalable solutions that meet modern web development standards."
     </p>
     </div>
</div>
  );
};

export default Skills;