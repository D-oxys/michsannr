import React from "react";
import Image from "next/image";

function product() {
  return (
    <>
      <div className="px-4 md:px-20">
        <div className="flex items-center">
          <div className="h-[0.15rem] w-12 bg-blue-600"></div>
          <div className="ml-4 text-2xl font-medium text-blue-600">My Product</div>
        </div>
        <h2 className="mt-2 text-4xl font-semibold leading-tight text-black md:text-[60px]">
          Support me by <br />
          buy my product.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <a href="#" target={"_blank"} className="mt-5 box-border flex flex-col overflow-hidden rounded-2xl bg-white drop-shadow transition-all ease-out hover:-translate-y-2">
            <img className="h-64 w-full object-cover md:h-72" src="img/5.webp" alt="2" />
            <div className="p-5">
              <h3 className="h-auto text-lg font-semibold capitalize text-black md:h-14 md:text-xl">Web Landing Page</h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-medium capitalize text-slate-500">uplabs</p>
                <p className="rounded-full bg-blue-600 px-5 py-2 text-base font-semibold text-blue-200 md:text-lg">premium</p>
              </div>
            </div>
          </a>
          <a href="#" target={"_blank"} className="mt-5 box-border flex flex-col overflow-hidden rounded-2xl bg-white drop-shadow transition-all ease-out hover:-translate-y-2">
            <img className="h-64 w-full object-cover md:h-72" src="img/3.webp" alt="3" />
            <div className="p-5">
              <h3 className="h-auto text-lg font-semibold capitalize text-black md:h-14 md:text-xl">E-Commerce</h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-medium capitalize text-slate-500">uplabs</p>
                <p className="rounded-full bg-blue-600 px-5 py-2 text-base font-semibold text-blue-200 md:text-lg">premium</p>
              </div>
            </div>
          </a>
          <a href="#" target={"_blank"} className="mt-5 box-border flex flex-col overflow-hidden rounded-2xl bg-white drop-shadow transition-all ease-out hover:-translate-y-2">
            <img className="h-64 w-full object-cover md:h-72" src="img/4.webp" alt="4" />
            <div className="p-5">
              <h3 className="h-auto text-lg font-semibold capitalize text-black md:h-14 md:text-xl">Personal Landing Page</h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-medium capitalize text-slate-500">uplabs</p>
                <p className="rounded-full bg-blue-600 px-5 py-2 text-base font-semibold text-blue-200 md:text-lg">premium</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default product;
