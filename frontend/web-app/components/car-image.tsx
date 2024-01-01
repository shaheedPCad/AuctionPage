"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarImageProps {
  imageUrl: string;
  make: string;
}

export default function CarImage({ imageUrl, make }: CarImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      alt={make}
      fill
      priority
      className={cn(
        "object-cover group-hover:opacity-75 duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale 110"
          : "grayscale-0 blur-0 scale-100"
      )}
      sizes="(max-width:768px) 100vw, 33vw"
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
