"use client";

import React from "react";
import Countdown, { zeroPad } from "react-countdown";

interface RendererTypes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

interface CountdownTimerProps {
  auctionEnd: string;
}

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: RendererTypes) => {
  return (
    <div
      className={`
      border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center
      ${
        completed
          ? "bg-red-600"
          : days === 0 && hours < 10
          ? "bg-amber-600"
          : "bg-green-600"
      }
    `}
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : (
        <span suppressHydrationWarning={true}>
          {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{seconds}
        </span>
      )}
    </div>
  );
};

export default function CountdownTimer({ auctionEnd }: CountdownTimerProps) {
  return (
    <div>
      <Countdown date={auctionEnd} renderer={renderer} />
    </div>
  );
}
