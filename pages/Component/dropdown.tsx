import React from "react";
import { useState } from "react";
import Link from "next/link";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="fas fa-th-large right-1 block border-b border-gray-100 py-2 pl-3 pr-4 text-3xl text-gray-700  dark:hover:text-white lg:border-0 lg:bg-transparent lg:p-0 lg:hover:text-blue-700 " />
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-gradient-to-br from-violet-300 to-blue-300">
          {/* Close button */}
          <button onClick={() => setIsOpen(!isOpen)} className="fas fa-times absolute right-2 top-2 text-xl text-white" />
          {/* Dropdown menu */}
          <div id="dropdown" className={`flex h-screen items-center justify-center divide-gray-100 overflow-y-auto`}>
            <ul className="py-2 text-center text-sm font-semibold text-white">
              <li>
                <Link href="/" className="mx-4 block px-4 py-2 text-4xl hover:bg-gray-100 hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="mx-4 block px-4 py-2 text-4xl hover:bg-gray-100 hover:text-blue-700">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="mx-4 block px-4 py-2 text-4xl hover:bg-gray-100 hover:text-blue-700">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/productPage" className="mx-4 block px-4 py-2 text-4xl hover:bg-gray-100 hover:text-blue-700">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/contactPage" className="mx-4 block px-4 py-2 text-4xl hover:bg-gray-100 hover:text-blue-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
