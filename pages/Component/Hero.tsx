import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section className="bg-transparent">
        <div
          className="animate__fadeIn animate__animated animate__delay-1s
      lg:py-1-16 mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 xl:gap-0"
        >
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="flex items-center">
              <div className="h-[0.15rem] w-16 bg-blue-600"></div>
              <div className="ml-4 text-2xl font-medium text-blue-600">Hello</div>
            </div>
            <div>
              <p className="font-sans text-4xl font-bold tracking-widest text-[#0F172A] md:text-5xl">
                My name is <span className="text-blue-600">Ichsan</span>
              </p>
              <p className="font-sans text-4xl font-bold tracking-widest text-[#0F172A] md:text-5xl">I'm a Software</p>
              <p className="font-sans text-4xl font-bold tracking-widest text-[#0F172A] md:text-5xl">Developer</p>
            </div>
            <button type="button" className="my-5 mb-2 mr-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              Recent Work
            </button>
          </div>
          <div className="mt-5 lg:col-span-5 lg:mt-0 lg:flex lg:flex-col">
            <div className="hidden lg:block">
              <Image src="/img/picofme.png" alt="hero" width={450} height={400} className="object-contain" />
            </div>
            <div className="mt-16 overflow-hidden lg:hidden">
              <Image src="/img/picofme.png" alt="hero" width={450} height={400} className="mx-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
