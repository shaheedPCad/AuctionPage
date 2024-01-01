import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import CountdownTimer from "./countdown-timer";
import CarImage from "./car-image";
import { Auction } from "@/types";

interface AuctionCardProps {
  auction: Auction;
}

export default function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <Card className="group">
      <div className="w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
        <CardContent>
          <CarImage imageUrl={auction.imageUrl} make={auction.make} />
          <div className="absolute bottom-2 left-2">
            <CountdownTimer auctionEnd={auction.auctionEnd} />
          </div>
        </CardContent>
      </div>
      <div className="flex justify-between items-cemter mt-4">
        <h3 className="text-gray-700">
          {auction.make} {auction.model}
        </h3>
        <p className="font-semibold text-sm">{auction.year}</p>
      </div>
    </Card>
  );
}
