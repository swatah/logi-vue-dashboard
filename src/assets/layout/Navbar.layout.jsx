import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleopen = () => setOpen(!open);

  const list = [
    { name: "Profile", url: "#" },
    { name: "Dashboard", url: "/" },
    { name: "Settings", url: "#" },
    { name: "Logout", url: "#" },
  ];

  return (
    <>
      <div className="top-0 z-50 w-full bg-white border border-gray-200 rounded-md drop-shadow-md shadow-gray-300">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between mx-10">
            <div className="flex items-center justify-start rtl:justify-end text-[#0a2e6c] text-4xl font-bold">
              <Link to="">Logi<span className="text-[#46bbe3]">Vue</span>&nbsp;AI</Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-20">
                <Link to="/Dashboard/Live">
                  <button className="border-2 border-red-600 px-5 py-1 font-bold text-red-600 rounded-lg cursor-pointer">
                    <span className=" text-xl flex">
                      Live{" "}
                      <img
                        src="/images/icons/play.svg"
                        alt=""
                        className="w-6 ml-2"
                      />
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    onClick={handleopen}
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/images/avtar/avtar-1.svg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={`z-50 ${
                    !open
                      ? "hidden"
                      : "block absolute top-10 border border-gray-300 right-5"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Swatah CEO
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      Abhianv@Swatah.com
                    </p>
                  </div>
                  <ul>
                    {list.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.url}
                          className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
