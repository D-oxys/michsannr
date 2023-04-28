import React from "react";

function be() {
  return (
    <div>
      <div className="px-6">
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-12 bg-blue-600"></div>
          <h2 className="text-2xl font-semibold text-blue-600">Back-End Skills</h2>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-6 md:grid-cols-4">
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="https://img.icons8.com/ios/50/null/php.png" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">PHP</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/python.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Python</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="https://www.vectorlogo.zone/logos/java/java-icon.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Java</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/C.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">C++</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/codeigniter.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Codeigniter</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/next.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Next Js</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/Flutter.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Flutter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default be;
