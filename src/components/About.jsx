import React from 'react'
import aboutImg from '../assets/pic.jpeg'

const About = () => {
  return (
    <div className=" bg-black max-w-[1200px] mx-auto  p-1 md:pt-10 " id="about">

      <div className="md:grid md:grid-cols-2 sm:py-1">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-3 md:py-0">
          <div className="my-5 mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base text-white lg:text-lg">
            I'm M. Talha, a front-end developer deeply passionate about creating intuitive, user-centered web experiences. With a good foundation in HTML, CSS, JavaScript, React.js, and Next.js, I bring designs to life by building fast, responsive, and interactive websites. My approach combines a strong technical background with an eye for aesthetics, ensuring that every project I work on is both functional and visually appealing.
            <br /><br />
Driven by a continuous desire to learn and evolve, I stay up-to-date with the latest industry trends and technologies, always seeking opportunities to refine my skills. Whether it’s developing from scratch or enhancing existing applications, my goal is to deliver solutions that elevate user experiences and meet the highest standards of modern web development.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3x1 py-8 md:py-0 h-[500px]"
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default About