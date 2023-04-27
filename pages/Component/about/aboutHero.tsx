import React from "react";
import Image from "next/image";
import Link from "next/link";
import { transform } from "typescript";

function aboutHero() {
  return (
    <section
      className="
    grid grid-cols-1 items-center px-20 pb-20 pt-5 lg:grid-cols-2"
    >
      <div className="animate__fadeIn animate__animated animate__delay-1s order-last py-4 md:order-first md:py-0">
        <div className="flex items-center">
          <div className="h-[0.15rem] w-16 bg-blue-600"></div>
          <div className="ml-4 text-2xl font-semibold text-blue-600">Hello My Name Is</div>
        </div>
        <h1 className="mt-0 text-2xl font-semibold tracking-wider text-slate-900 md:mt-6 md:text-5xl lg:text-[50px]">Mochamad Ichsan Nr</h1>
        <p className="mt-6 text-[1rem] leading-6 text-[#64748BBF] text-opacity-100">
          {" "}
          I am a <span className="font-medium text-blue-600">Front End Developer</span> and <span className="font-medium text-blue-600">Back End Developer</span>, I am used to making project with React JS and Tailwind CSS, I use git as
          version control and github to store my project source code.
        </p>
        <p className="mt-4 text-[1rem] leading-6 text-[#64748BBF] text-opacity-100">
          I am graduate of <span className="font-medium text-blue-600">Computer Network Engineering Vocational School</span>, have high spirit of motivation in term of <span className="font-medium text-blue-600">learning</span>,
          <span className="font-medium text-blue-600">seek experience</span> and <span className="font-medium text-blue-600">seek new things</span>.
        </p>
        <p className="mt-6 text-[1rem] leading-6 text-[#64748BBF] text-opacity-100">
          I am able to work in a team well, honestly,<span className="font-medium text-blue-600">Work Smart</span> and <span className="font-medium text-blue-600">responsible</span>. Currently looking for a job as Software Developer in a
          company.
        </p>
        <Link href="pdf/ichsanCV.pdf" target="_blank">
          <div className="mt-8 inline-flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M13 3H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2zm-1 10H8a1 1 0 110-2h4a1 1 0 110 2zm0-4H8a1 1 0 110-2h4a1 1 0 110 2z" clipRule="evenodd" />
            </svg>
            Get my CV
          </div>
        </Link>
      </div>
      <div className="animate__fadeIn animate__animated animate__delay-2s group order-first mx-auto max-w-md pb-12 pt-24 md:order-last">
        <div className="relative" style={{ transform: "perspective(1000px) rotate(0deg) rotateY(0deg) scale3d(1,1,1)", willChange: "transform" }}>
          <div className="flex h-60 w-60 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-blue-400 to-violet-500 md:h-[28rem] md:w-[28rem]">
            <Image className="transition-all duration-300 ease-out group-hover:translate-x-5 group-hover:translate-y-5" src="/img/picofme.png" alt="hero" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutHero;
