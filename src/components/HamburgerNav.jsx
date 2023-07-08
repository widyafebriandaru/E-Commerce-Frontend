import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const HamburgerNav = (props) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={`${props.toggleClassCheck}`}>
        <div className="">
          <div className="mt-4 ml-2">
            <Search />
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate('/')} href="" id="login2">
              HOME
            </a>
          </div>
          <div className="hamburger-text">
            <button onClick={toggleDropdown} className="focus:outline-none">
              SHOP{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="w-6 h-6 inline-block ml-1 text-slate-400"
              >
                <path fillRule="evenodd" d="M6 6l8 4-8 4V6zm2 0v8l6-4-6-4z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <ul className="text-gray-700">
                  <li
                    onClick={() => navigate("/t-shirt")}
                    className="hamburger-text-small cursor-pointer hover:bg-gray-200 hover:text-slate-800 text-slate-400 "
                  >
                    T-Shirt
                  </li>
                  <li
                    onClick={() => navigate("/shirt")}
                    className="hamburger-text-small cursor-pointer hover:bg-gray-200 text-slate-400 hover:text-slate-800"
                  >
                    Shirt
                  </li>
                  <li
                    onClick={() => navigate("/accessories")}
                    className="hamburger-text-small cursor-pointer hover:bg-gray-200 text-slate-400 hover:text-slate-800"
                  >
                    Accessories
                  </li>
                  <li
                    onClick={() => navigate("/pants")}
                    className="hamburger-text-small cursor-pointer hover:bg-gray-200 text-slate-400 hover:text-slate-800"
                  >
                    Pants
                  </li>
                  <li
                    onClick={() => navigate("/sweater")}
                    className="hamburger-text-small cursor-pointer hover:bg-gray-200 text-slate-400 hover:text-slate-800"
                  >
                    Sweater
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate('/accessories')} href="">
              GOOD VIBRATIONS
            </a>
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate('/magazine')} href="">
              MAGAZINE
            </a>
          </div>
          <div className="hamburger-text-small hover:bg-gray-200 hover:text-slate-800">
            <a onClick={() => navigate('/login')} href="">
              Login/Register
            </a>
          </div>
          <div className="hamburger-text-small hover:bg-gray-200 hover:text-slate-800">
            <a onClick={() => navigate('/contact')} href="">
              Contact Us
            </a>
          </div>
          <div className="hamburger-text-small hover:bg-gray-200 hover:text-slate-800">
            <a onClick={() => navigate('/faq')} href="">
              FAQ
            </a>
          </div>
          <div className="hamburger-text-small hover:bg-gray-200 hover:text-slate-800">
            <a onClick={() => navigate('/terms-and-conditions')} href="">
              Terms & Conditions
            </a>
          </div>
          <div className="hamburger-text-small hover:bg-gray-200 hover:text-slate-800">
            <a onClick={() => navigate('/terms-of-service')} href="">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerNav;
