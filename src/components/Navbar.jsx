import {
  FaBell,
  FaMoon,
  FaSun,
  FaBars,
  FaSearch,
  FaUser,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import navImg from "../assets/images/person_sq_1.jpg";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  setIsOpen,
  dropdown,
  setDropdown,
  profileDropdown,
  setProfileDropdown,
  dropdownRef,
  search,
  setSearch,
}) => {
  return (
    <nav
      className="py-4 lg:px-10 px-6 w-full flex justify-between items-center shadow bg-white
       dark:bg-gray-900 sticky top-0"
    >
      <div className="flex items-center md:gap-0 gap-4 w-2/4">
        <span onClick={() => setIsOpen((prevState) => !prevState)}>
          <FaBars className="md:hidden block text-primary cursor-pointer text-xl" />
        </span>
        <form action="search" className="w-full">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute top-search left-0 pl-3 cursor-pointer">
              <FaSearch className="text-primary" />
            </span>
            <input
              className="placeholder:text-black block bg-gray-100 dark:bg-gray-800
               dark:placeholder:text-white w-full rounded-md py-2 pl-10  pr-3 shadow-sm
              focus:outline-none border dark:border-gray-800 dark:focus:border-primary
              focus:border-primary focus:bg-transparent md:whitespace-nowrap whitespace-normal text-ellipsis"
              placeholder="Search for anything"
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div
        className="flex gap-6 items-center relative cursor-pointer"
        ref={dropdownRef}
      >
        <button
          className="text-primary"
          onClick={() => setIsDarkMode((prevState) => !prevState)}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="relative"
          onClick={() => {
            setDropdown((prevState) => !prevState);
            setProfileDropdown(false);
          }}
        >
          <FaBell className="text-primary" />
          <div className="h-3 w-3 bg-red-500 absolute -top-1 -right-1 border-2 border-white dark:border-gray-900 rounded-full"></div>
        </button>
        <button
          onClick={() => {
            setProfileDropdown((prevState) => !prevState);
            setDropdown(false);
          }}
        >
          <img src={navImg} alt="" className="h-10 w-10 rounded-full" />
        </button>
      </div>
      <div
        className={
          dropdown
            ? "absolute bg-white text-black dark:bg-gray-800 dark:text-white top-16 md:right-24 right-20 flex flex-col gap-4 px-4 py-4 rounded-lg w-48 shadow-lg"
            : "hidden"
        }
      >
        <ul className="text-sm flex flex-col gap-3 cursor-pointer">
          <li className="flex justify-between">
            <p>Messages</p>
            <p className="text-red-600 bg-red-100 px-2 py-1 text-xs font-medium rounded-full">
              17
            </p>
          </li>
          <li className="flex justify-between">
            <p>Sales</p>
            <p className="text-red-600 bg-red-100 px-2 py-1 text-xs font-medium rounded-full">
              2
            </p>
          </li>
          <li>Alerts</li>
        </ul>
      </div>
      <div
        className={
          profileDropdown
            ? "absolute bg-white text-black dark:bg-gray-800 dark:text-white top-16 md:right-10 right-6 flex flex-col gap-4 px-4 py-4 rounded-lg w-48 shadow-lg"
            : "hidden"
        }
      >
        <ul className="text-sm flex flex-col gap-3 cursor-pointer">
          <li className="flex items-center gap-4">
            <FaUser />
            <p className="">Profile</p>
          </li>
          <li className="flex items-center gap-4">
            <FaRegSun />
            <p className="">Settings</p>
          </li>
          <li className="flex items-center gap-4">
            <FaSignOutAlt />
            <p className="">Log out</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
