/* eslint-disable react/prop-types */
// import React, {props} from 'react';
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const HamburgerNav = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {/* HAMBURGER MENU START */}
      <div className={`${props.toggleClassCheck}`}>
        <div className="">
          <div className="mt-4 ml-2">
            <Search />
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate("/")} href="" id="login2">
              HOME{" "}
            </a>
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate("/all-products")} href="">
              SHOP{" "}
            </a>
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate("/new-arrivals")} href="">
              GOOD VIBRATIONS
            </a>
          </div>
          <div className="hamburger-text">
            <a onClick={() => navigate("/magazine")} href="">
              MAGAZINE
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/login")} href="">
              Login/Register
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/contact")} href="">
              Contact Us
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/*")} href="">
              How To Shop
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/*")} href="">
              FAQ
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/*")} href="">
              Return Policy
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/*")} href="">
              Team & Conditions
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/*")} href="">
              Terms of Service
            </a>
          </div>
          <div className="hamburger-text-small">
            <a onClick={() => navigate("/*")} href="">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerNav;
