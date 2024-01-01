"use client";

import { useParamsStore } from "@/hooks/use-params-store";
import { Car } from "lucide-react";
import React from "react";

export default function Logo() {
  const reset = useParamsStore((state) => state.reset);
  return (
    <div
      onClick={reset}
      className="cursor-pointer flex items-center gap-2 text-3xl font-semibold"
    >
      <Car size={50} />
      <div>Car Auctions</div>
    </div>
  );
}
