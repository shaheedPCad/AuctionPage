"use client";

import { useParamsStore } from "@/hooks/use-params-store";
import { Car } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Logo() {
  const router = useRouter();
  const pathname = usePathname();
  const reset = useParamsStore((state) => state.reset);

  const doReset = () => {
    if (pathname !== "/") router.push("/");
    reset();
  };

  return (
    <div
      onClick={doReset}
      className="cursor-pointer flex items-center gap-2 text-3xl font-semibold"
    >
      <Car size={50} />
      <div>Car Auctions</div>
    </div>
  );
}
