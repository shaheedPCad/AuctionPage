"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useParamsStore } from "@/hooks/use-params-store";
import { usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const setParams = useParamsStore((state) => state.setParams);
  const setSearchValue = useParamsStore((state) => state.setSearchValue);
  const searchValue = useParamsStore((state) => state.searchValue);
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    if (pathname !== "/") router.push("/");
    setParams({ searchTerm: searchValue });
  };

  return (
    <div className="flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm">
      <input
        onKeyDown={(e: any) => {
          if (e.key === "Enter") search();
        }}
        value={searchValue}
        onChange={onChange}
        type="text"
        placeholder="Search for cars by make, model or color"
        className="
          flex-grow 
          pl-5
          bg-transparent
          focus:outline-none
          border-transparent
          focus:border-transparent
          focus:ring-0
          text-sm
          text-gray-600
        "
      />
      <button>
        <Search
          onClick={search}
          size={34}
          className="rounded-full bg-black text-white p-2 cursor-pointer mx-2"
        />
      </button>
    </div>
  );
}
