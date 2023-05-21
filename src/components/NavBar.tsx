import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");
  const [searchTerm, setSearchTerm] = useState("");

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
    <nav className="w-full m-0 px-4 py-4 bg-light dark:bg-dark text-dark dark:text-light flex justify-between">
      <div className="flex justify-between items-center">
        <div className="flex md:hidden">
          <AiOutlineMenu size={30} />
        </div>
        <button className="mr-5 px-2 py-1 h-full hover:border-b-4 hover:border-hover">
          Category
        </button>
        <button className="mr-5 px-2 py-1 h-full hover:border-b-4 hover:border-hover">
          Platform
        </button>
      </div>
      <div className="px-2 py-0.5 flex justify-start items-center rounded-full bg-gray-200 w-full md:w-[400px]">
        <AiOutlineSearch size={25} className="dark:text-dark" />
        <input
          type="text"
          className="min-w-[350px] p-2 focus:outline-none text-black bg-transparent"
          placeholder="Search your favourite games..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="flex justify-center">
        <button onClick={handleThemeChange}>
          <img
            src={`${
              theme === "dark" ? "/dark-theme-light.svg" : "/dark-theme.svg"
            }`}
            height={50}
            width={35}
            className="cursor-pointer mr-5"
          />
        </button>
        <button className="mr-5 px-2 py-1 bg-violet-600 hover:bg-violet-800">
          Sign Up
        </button>
        <button className="m-0 px-2 py-1 bg-primary hover:bg-hover">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
