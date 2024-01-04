import AuctionForm from "@/components/auction-form";
import Heading from "@/components/heading";
import React from "react";

export default function Create() {
  return (
    <div className="mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg">
      <Heading
        title="Sell your car!"
        subtitle="Please enter the details of your car"
      />
      <AuctionForm />
    </div>
  );
}
