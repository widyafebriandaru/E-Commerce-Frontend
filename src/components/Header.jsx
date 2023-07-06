import { useEffect, useState, useRef } from "react";
import HamburgerNav from "./HamburgerNav";
import * as Icon from "react-feather";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const [navbarState, setNavbarState] = useState(false);
  const toggleClassCheck = navbarState
    ? "hamburger-nav active"
    : "hamburger-nav";

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNavbarState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [dropDownState, setDropDownState] = useState(false);
  const toggleDropDown = dropDownState
    ? "dropdown-menu active"
    : "dropdown-menu";
  const dropDownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [dropDownState2, setDropDownState2] = useState(false);
  const toggleDropDown2 = dropDownState2
    ? "dropdown-menu2 active"
    : "dropdown-menu2";
  const dropDownRef2 = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownRef2.current.contains(e.target)) {
        setDropDownState2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [searchVisible, setSearchVisible] = useState(false);
  const searchInputRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!searchInputRef.current.contains(e.target)) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchVisible) {
      searchInputRef.current.focus();
    }
  }, [searchVisible]);

  const navigate = useNavigate();

  return (
    <>
      <div ref={menuRef}>
        <HamburgerNav toggleClassCheck={toggleClassCheck} />
      </div>
      <div className="pt-2 absolute w-full z-20">
        <div className="container mx-auto flex justify-between items-center sm:px-0 px-10">
          <button>
            <Icon.Menu
              href=""
              className="flex text-white md:hidden relative w-[30px] h-[30px] hover:text-[#232324]"
              id="hamburger-menu"
              onClick={() => setNavbarState(!navbarState)}
            />
          </button>

          <button href="" className="logo mb-2" onClick={() => navigate("/")}>
            <img
              className="max-h-14 max-w-[240px] sm:left-12 ml-12 sm:ml-0"
              src="/assets/Homepage/hero-logo.png"
              alt=""
            />
          </button>

          <div className="flex text-white gap-2">
            <div className="dropdown w-32 hidden md:flex">
              <button
                onClick={() => setDropDownState(!dropDownState)}
                className="nav-link h-7 text-xl pl-7 w-full flex hover:scale-110 transition ease-in-out duration-[350ms]"
                href=""
              >
                SHOP{" "}
                <div className="mt-2 ml-2">
                  <Icon.ArrowDown size={12} />
                </div>
              </button>
              <div className={`${toggleDropDown} text-lg`} ref={dropDownRef}>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/new-arrivals")}
                >
                  {" "}
                  New Arrivals
                </button>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/t-shirt")}
                >
                  {" "}
                  T-Shirt
                </button>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/shirt")}
                >
                  {" "}
                  Shirt
                </button>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/sweater")}
                >
                  {" "}
                  Sweater
                </button>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/pants")}
                >
                  {" "}
                  Pants
                </button>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/accessories")}
                >
                  {" "}
                  Accessories
                </button>
                <button
                  className="block hover:text-gray-600"
                  onClick={() => navigate("/all-products")}
                >
                  {" "}
                  All Product
                </button>
              </div>
            </div>

            <div className="dropdown">
              <button
                onClick={() => setDropDownState2(!dropDownState2)}
                className="nav-link h-7 hidden md:flex text-xl hover:scale-110 transition ease-in-out duration-[350ms]"
                href=""
              >
                GOOD VIBRATIONS{" "}
                <div className="mt-2 ml-2">
                  <Icon.ArrowDown size={12} />
                </div>
              </button>
              <div className={`${toggleDropDown2}`} ref={dropDownRef2}>
                <button
                  className="hover:text-gray-600"
                  onClick={() => navigate("/new-arrivals")}
                >
                  {" "}
                  Good Vibrations Vol 3
                </button>
              </div>
            </div>

            <a
              className="nav-link h-7 hidden md:block text-xl px-3  hover:scale-110 transition ease-in-out duration-[350ms]"
              href="#"
              onClick={() => navigate("/Magazine")}
            >
              MAGAZINE
            </a>

            <button
              onClick={() => navigate("/login")}
              className="nav-link w-7 h-7 hover:scale-110 transition ease-in-out duration-[350ms]"
              href=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("/*")}
              className="nav-link w-7 h-7  hover:scale-110 transition ease-in-out duration-[350ms]"
              href=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="M222.14 58.87A8 8 0 0 0 216 56H54.68l-4.89-26.86A16 16 0 0 0 34.05 16H16a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H83.17a8 8 0 0 1-7.87-6.57L72.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56ZM180 192a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm-96 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12Z"
                />
              </svg>
            </button>

            {/* {searchVisible ? (
              <div className="nav-link relative flex items-center">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search"
                  className="py-1 px-2 border-2 border-gray-400 rounded-md text-black"
                  style={{ color: "black" }}
                />
                <button
                  className="nav-link w-7 h-7 hover:scale-110 transition ease-in-out duration-[350ms]"
                  onClick={() => setSearchVisible(false)}
                >
                  <Icon.X />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchVisible(true)}
                className="nav-link w-7 h-7 hover:scale-110 transition ease-in-out duration-[350ms]"
                href=""
              >
                <Icon.Search />
              </button>
            )} */}
            <Search/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
