"use client";

import { User } from "next-auth";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleDollarSign,
  LogOut,
  Trophy,
  User as UserIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useParamsStore } from "@/hooks/use-params-store";

interface Props {
  user: User;
}

export default function UserAction({ user }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore((state) => state.setParams);

  const setWinner = () => {
    setParams({ winner: user.username, seller: undefined });
    if (pathname !== "/") router.push("/");
  };

  const setSeller = () => {
    setParams({ seller: user.username, winner: undefined });
    if (pathname !== "/") router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex">
        <span className="border-2 outline-transparent transition ease-in-out delay-75 border-black rounded-full p-3 hover:bg-black hover:text-white">{`Welcome ${user.name}`}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel onClick={setSeller} className="cursor-pointer">
          <UserIcon className="mr-2 h-4 w-4" />
          My Auctions
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={setWinner}>
          <Trophy className="mr-2 h-4 w-4" />
          Auctions Won
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CircleDollarSign className="mr-2 h-4 w-4" />
          <Link href="/auctions/create">Sell my car</Link>
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
