import React from "react";

function serve() {
  return (
    <section className="bg-[#1c2863]">
      <div className="lg:py-1-16 mx-auto grid max-w-screen-xl px-4 py-20 lg:grid-cols-12 lg:gap-8 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex items-center">
            <div className="h-[0.15rem] w-12 bg-pink-400"></div>
            <div className="ml-4 text-2xl font-medium text-pink-400">What We Serve</div>
          </div>
          <div className="">
            <h2 className="mt-4 font-sans text-xl font-semibold text-white md:text-4xl">Some of the services I specialize in, if you are interested, please contact me.</h2>
            <h3 className="mt-20 text-5xl font-semibold text-white md:text-6xl">
              {" "}
              Think.Make.
              <br />
              Solve
            </h3>
          </div>
          <div className="absolute right-0 mt-8 flex flex-col items-center gap-8 px-4 md:mt-4 md:flex-row md:justify-center lg:-mt-8 lg:mr-[4%] xl:-mt-40">
            <div className="box-border drop-shadow flex w-full flex-col items-center justify-center rounded-3xl bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-4 md:max-w-[320px]">
              <img className="h-44 w-44" src="img/3426526.jpg" />
              <div className="mt-8">
                <h4 className="text-center text-black text-xl font-semibold md:text-2xl">Front End Developer</h4>
                <p className="mt-4 text-center text-slate-500">Create your amazing idea in websites , full interaction with responsive views.</p>
              </div>
            </div>
            <div className="box-border drop-shadow flex w-full flex-col items-center justify-center rounded-3xl bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-4 md:max-w-[320px]">
              <img className="h-44 w-44" src="img/4421964.jpg" />
              <div className="mt-8">
                <h4 className="text-center text-black text-xl font-semibold md:text-2xl">Back End Developer</h4>
                <p className="mt-4 text-center text-slate-500">Develop and manage dynamic data-driven apps using robust server-side tech</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:col-span-5 lg:mt-0 lg:flex lg:flex-col"></div>
      </div>
    </section>
  );
}

export default serve;
