import React from "react";
import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link to="/">
    <h1  className="text-yellow-700 text-center text-4xl md:text-3xl font-bold">SKIN-SHA</h1>
      {/* <img
        alt="Logo"
        className="block cursor-pointer"
        height={100}
        width={100}
        src="/logo.jpg"
      /> */}
    </Link>
  );
}
