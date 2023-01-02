import Image from "next/image";
import { useState } from "react";
import { getSiteMap } from "../libs/getSiteMap";
import BuildMenuWithDropDown from "./buildMenuWithDropDown";

export default function Header({ siteMap }) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      {/*begin menu pop-up full screen */}
      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } flex flex-col w-full h-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm fixed bottom-0 left-0 right-0"`}
      >
        <div className="flex justify-end text-white">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col h-full items-center justify-center text-white text-xl space-y-8">
          <a href="#" className="uppercase">
            About us
          </a>
          <a href="#" className="uppercase">
            Compressed Air Technique
          </a>
          <a href="#" className="uppercase">
            Gas Generation Technique
          </a>
          <a href="#" className="uppercase">
            Download
          </a>
          <a href="#" className="uppercase">
            Inquiry
          </a>
          <form>
            <input
              placeholder="TYPE YOUR SEARCH"
              className="bg-gray-700 bg-opacity-80 border-b focus:border-b placeholder-shown:text-white"
            />
          </form>
        </div>
      </div>
      {/* end menu pop-up full screen */}

      <nav className="bg-gradient-to-r from-white via-slate-200 to-blue-800 sticky top-0">
        <div className="w-full mx-auto px-3">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a href="#" className="flex py-3 border-r px-4">
                  <Image
                    src={"/assets/images/GSA_logo_Since_1993.png"}
                    width={100}
                    height={52}
                    alt="Logo"
                  />
                </a>
              </div>
              {/* logo */}

              <div className="xs:hidden lg:flex relative  items-center space-x-5 pl-4 font-bold">
                <BuildMenuWithDropDown siteMap={siteMap} />
              </div>
            </div>

            {/* begin menu button */}
            <div className="lg:hidden flex text-white">
              <button
                onClick={handleClick}
                className="flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <span className="font-medium">Menu</span>
              </button>
            </div>
            {/* end menu button */}
          </div>
        </div>
      </nav>
    </header>
  );
}
