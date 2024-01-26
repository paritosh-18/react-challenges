import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  return (
    <div className=" border border-black m-2 p-2 shadow-xl flex justify-between">
      <img
        src={logo}
        alt="logo"
        className="h-10 w-10 m-2 p-2 bg-black rounded-full"
      />
      <h1 className="m-2 p-2 text-lg font-bold">React Coding Challenges</h1>
      <button className=" m-2 p-2 border border-black rounded-xl">
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default Header;
