import { Car } from "lucide-react";
import React from "react";
import SearchBar from "./search";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header
      className="
    sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md
    "
    >
      <Logo />
      <SearchBar />
      <div>Login</div>
    </header>
  );
}
