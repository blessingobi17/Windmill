import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartPie,
  FaTable,
  FaList,
  FaChevronDown,
} from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen, setDropdown, setProfileDropdown }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "navBtn active text-black dark:text-white flex items-center gap-4 cursor-pointer"
      : "flex items-center gap-4 cursor-pointer";

  const tablesClass = ({ isActive }) =>
    isActive || window.location.pathname.includes("/edit")
      ? "navBtn active text-black dark:text-white flex items-center gap-4 cursor-pointer"
      : "flex items-center gap-4 cursor-pointer";

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDropdowns = () => {
    closeMenu();
    setChevron(false);
    setDropdown(false);
    setProfileDropdown(false);
  };

  const [chevron, setChevron] = useState(false);

  return (
    <>
      <div className={isOpen ? "overlay" : ""} onClick={closeMenu}></div>
      <main
        className={
          isOpen
            ? "bg-white text-black dark:bg-gray-900 dark:text-white border-r border-r-gray-300 dark:border-r-gray-900 w-3/5 h-screen px-8 py-4 fixed top-16 left-0"
            : "bg-white text-black dark:bg-gray-900 dark:text-white border-r border-r-gray-300 dark:border-r-gray-900 lg:w-sidebar md:w-1/4 h-screen px-8 py-4 sticky top-0 md:block hidden"
        }
      >
        <section>
          <Link
            to="/"
            onClick={() => {
              handleDropdowns();
            }}
          >
            <h1 className="text-xl font-semibold">Windmill</h1>
          </Link>
          <ul className="pt-10 space-y-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <li className="relative">
              <NavLink
                to="/"
                className={linkClass}
                onClick={() => {
                  handleDropdowns();
                }}
              >
                <FaHome />
                Dashboard
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/form"
                className={linkClass}
                onClick={() => {
                  handleDropdowns();
                }}
              >
                <FaFileLines />
                Form
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/charts"
                className={linkClass}
                onClick={() => {
                  handleDropdowns();
                }}
              >
                <FaChartPie />
                Charts
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/tables"
                className={tablesClass}
                onClick={() => {
                  handleDropdowns();
                }}
              >
                <FaTable />
                Tables
              </NavLink>
            </li>
            <li className="relative">
              <a
                className="flex gap-4 items-center cursor-pointer"
                onClick={() => {
                  setChevron((prevState) => !prevState);
                  setDropdown(false);
                }}
              >
                <FaList />
                <span className="flex items-center justify-between w-full gap-4">
                  Pages
                  <FaChevronDown
                    className={chevron ? "text-xs rotate-180" : "text-xs"}
                  />
                </span>
              </a>
              <div>
                <ul
                  className={
                    chevron
                      ? "w-full mt-4 py-3 px-3 space-y-5 rounded-md bg-gray-100 text-gray-500 dark:bg-slate-950 dark:text-white border border-gray-300 dark:border-gray-900 cursor-pointer"
                      : "hidden"
                  }
                >
                  <li>Login</li>
                  <li>Create account</li>
                  <li>Forgot password</li>
                  <li>404</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Sidebar;
