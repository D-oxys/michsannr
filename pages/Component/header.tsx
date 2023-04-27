import React from "react";
import Dropdown from "../Component/dropdown";

function header() {
  return (
    <>
      <header>
        <nav className=" bg-transparent px-4 py-2 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="bg-te self-center whitespace-nowrap text-xl font-semibold text-slate-600">Ichsan</span>
            </a>
            <div className="flex items-center bg-gradient-to-br from-violet-300 to-blue-300 lg:order-2">
              {/* <!-- Dropdown menu --> */}
              <div className="fixed right-5 top-1 z-[99999] rounded-full">
                <Dropdown />
              </div>
            </div>
            <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8 ">
                <li>
                  <a
                    href="https://www.linkedin.com/in/michsannr/"
                    target={"_blank"}
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-slate-800"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/m.ichsannr/"
                    target={"_blank"}
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-slate-800"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/D-oxys"
                    target={"_blank"}
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-slate-800"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://profile.indeed.com/?hl=en_ID&co=ID&from=gnav-notifcenter"
                    target={"_blank"}
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-slate-800"
                  >
                    Indeed
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~013e02e6a5c9327594"
                    target={"_blank"}
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-slate-800"
                  >
                    Upwork
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default header;
