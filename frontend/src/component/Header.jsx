import React from "react";
import { DiAtom } from "react-icons/di";

const Header = () => {
  return (
    <header className="h-[8%] w-full  justify-between items-right p-6  ">
      <div className="text-9xl font-bold flex items-center">
        <DiAtom className="mr-2" /> ............
      </div>
      <nav className="space-x-10">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Sign In
        </a>
        <a href="#" className="hover:underline">
          Sign Up
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
