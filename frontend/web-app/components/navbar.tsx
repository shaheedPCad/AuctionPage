import React from "react";
import SearchBar from "./search";
import Logo from "./logo";
import LoginButton from "./login-button";
import { getCurrentUser } from "@/actions/authActions";
import UserActions from "./user-actions";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header
      className="
      sticky top-0 z-50 flex justify-between
     bg-white p-5 items-center text-gray-800 shadow-md
    "
    >
      <Logo />
      <SearchBar />
      {user ? <UserActions user={user} /> : <LoginButton />}
    </header>
  );
}
