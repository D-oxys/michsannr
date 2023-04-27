import React from "react";
import Carousel from "../Component/carousel";
function portfolio() {
  return (
    <div className="mt-32 px-20 md:mt-5">
      <div className="mt-5 flex items-center ">
        <div className="h-[0.15rem] w-12 bg-[#5F65F4]"></div>
        <div className="ml-4 text-2xl font-medium text-[#5F65F4]">Recent Project</div>
      </div>
      <h2 className="mb-4 text-4xl font-semibold leading-tight text-black md:text-[64px]">
        Look at my <br /> portfolios.
      </h2>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default portfolio;
