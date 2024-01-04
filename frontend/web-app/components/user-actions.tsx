"use client";

import { User } from "next-auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  CircleDollarSign,
  LogOut,
  Trophy,
  User as UserIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "flowbite-react";

interface Props {
  user: Partial<User>;
}

export default function UserAction({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex">
        <span className="border-2 outline-transparent transition ease-in-out delay-75 border-black rounded-full p-3 hover:bg-black hover:text-white">{`Welcome ${user.name}`}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <UserIcon className="mr-2 h-4 w-4" />
          <Link href="/">My Auctions</Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trophy className="mr-2 h-4 w-4" />
          <Link href="/">Auctions Won</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CircleDollarSign className="mr-2 h-4 w-4" />
          <Link href="/">Sell my car</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/session">Session (dev only)</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
