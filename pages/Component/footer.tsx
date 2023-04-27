import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

function footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="bg-[#1c2863] pt-10">
        <div className="mx-auto px-4 pt-20">
          <div className="mb-20 flex flex-col justify-center gap-8 md:flex-row md:gap-32">
            <div>
              <h3 className="max-w-[496px] text-3xl font-semibold text-white md:text-5xl">You only have one chance to make a first impression.</h3>
              <div className="mt-5 flex items-center ">
                <div className="h-[0.15rem] w-12 bg-pink-200"></div>
                <h2 className="ml-4 text-2xl font-semibold leading-tight text-pink-200">Let's make it an amazing one</h2>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <div className="text-center text-lg text-white transition duration-200 hover:text-blue-600 md:text-start">Home</div>
              </Link>
              <Link href="/about">
                <div className="text-center text-lg text-white transition duration-200 hover:text-blue-600 md:text-start">About Me</div>
              </Link>
              <Link href="/projects">
                <div className="text-center text-lg text-white transition duration-200 hover:text-blue-600 md:text-start">Projects</div>
              </Link>
              <Link href="/productPage">
                <div className="text-center text-lg text-white transition duration-200 hover:text-blue-600 md:text-start">Product</div>
              </Link>
              <Link href="/contactPage">
                <div className="text-center text-lg text-white transition duration-200 hover:text-blue-600 md:text-start">Contact</div>
              </Link>
            </div>
          </div>
          <hr className="bg-white" />
          <div className="flex items-center justify-between px-4 py-8 text-white md:px-8">
            <h5>
              © 2023, Ichsan <span className="text-[#1c2863]">& pipit❤</span>
            </h5>
            <button onClick={scrollToTop} className={`transition duration-200 hover:text-blue-500 ${isVisible ? "block" : "hidden"}`}>
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
