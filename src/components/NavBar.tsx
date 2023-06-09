import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleThemeChange = () => {
    setTheme(`${theme === "dark" ? "light" : "dark"}`);
  };

  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between lg:items-center py-4 px-5 dark:bg-dark">
        <div className="hidden lg:flex lg:flex-row justify-between">
          <button className="rounded-full bg-green-400 hover:bg-green-500 py-2 px-3 mr-5">
            Browse by category
          </button>
          <button className="rounded-full bg-green-400 hover:bg-green-500 py-2 px-3">
            Browse by platform
          </button>
        </div>
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search for your favourite games..."
            value={searchTerm}
            onChange={handleSearch}
            className="lg:min-w-[300px] rounded-full bg-black/10 dark:bg-light py-2 px-3 focus:outline-none"
          />
        </div>
        <div className="flex justify-between">
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <AiOutlineMenu size={30} className="text-dark dark:text-light" />
          </div>
          <div className="cursor-pointer" onClick={handleThemeChange}>
            <img
              src={`${
                theme === "dark" ? "dark-theme-light.svg" : "dark-theme.svg"
              }`}
              width={30}
              height={30}
              alt="Tap to switch to dark or light theme"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showSideBar && (
        <>
          {/* Overlay */}
          <div className="lg:hidden bg-dark/80 dark:bg-light/60 absolute top-0 left-0 h-screen w-screen"></div>
          {/* Sidebar Menu */}
          <div className="lg:hidden fixed top-0 left-0 h-screen w-screen sm:w-[50%] bg-light sm:bg-light dark:bg-dark transition-all duration-800">
            <div className="flex justify-between items-center p-4">
              <div className="cursor-pointer" onClick={handleThemeChange}>
                <img
                  src={`${
                    theme === "dark" ? "dark-theme-light.svg" : "dark-theme.svg"
                  }`}
                  width={30}
                  height={30}
                  alt="Tap to switch to dark or light theme"
                />
              </div>
              <AiOutlineClose
                size={30}
                className="text-dark dark:text-light cursor-pointer"
                onClick={() => setShowSideBar(false)}
              />
            </div>

            <div className="text-dark dark:text-light p-4">
              <div className="flex flex-col gap-5">
                <button className="rounded-full bg-green-400 hover:bg-green-500 py-2 px-3">
                  Browse by Category
                </button>
                <button className="rounded-full bg-green-400 hover:bg-green-500 py-2 px-3">
                  Browse by Platform
                </button>
              </div>
              <input
                type="text"
                placeholder="Search for your favourite games..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full rounded-full bg-black/10 dark:bg-light py-2 px-3 mt-5 mb-5 focus:outline-none text-black"
              />
              <button className="rounded-full bg-blue-400 hover:bg-blue-500 py-2 px-3 w-full flex items-center justify-center">
                <AiOutlineSearch size={25} />
                <span className="ml-1">Search</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
