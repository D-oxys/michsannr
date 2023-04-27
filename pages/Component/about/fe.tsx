import React from "react";

function fe() {
  return (
    <div>
      <div className="px-6">
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-12 bg-blue-600"></div>
          <h2 className="text-2xl font-semibold text-blue-600">Front-End</h2>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-6 md:grid-cols-4">
          <div className="group flex flex-col items-center gap-2">
            <img
              className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">HTML</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img
              className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">css</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img
              className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Javascript</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img
              className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
            />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Sass</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img
              className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">bootstrap 5</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img
              className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Tailwind</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/react.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">React Js</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <img className="mx-auto w-20 rounded-xl border-2 border-slate-200 p-4 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg" src="img/icon/next.svg" />
            <span className="group-hover:text-primary text-center text-[12px] font-semibold uppercase text-slate-500 transition duration-300 ease-out">Next Js</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fe;
