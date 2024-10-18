import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useRef, useEffect, useContext } from "react";
import ScrollTop from "../components/ScrollTop";
import DataContext from "../context/DataContext";

const MainLayout = () => {
  const { search, setSearch } = useContext(DataContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
        setProfileDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <main
      className={
        isDarkMode ? "dark bg-slate-950 text-white" : "bg-white text-black"
      }
    >
      <ScrollTop />
      <main className="flex">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setDropdown={setDropdown}
          setProfileDropdown={setProfileDropdown}
        />
        <div className="lg:w-body md:w-3/4 w-full">
          <Navbar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            setIsOpen={setIsOpen}
            dropdown={dropdown}
            setDropdown={setDropdown}
            profileDropdown={profileDropdown}
            setProfileDropdown={setProfileDropdown}
            dropdownRef={dropdownRef}
            search={search}
            setSearch={setSearch}
          />
          <Outlet />
        </div>
      </main>
    </main>
  );
};

export default MainLayout;
