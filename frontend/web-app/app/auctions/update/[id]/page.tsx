import { getDetailedViewData } from "@/actions/auction-actions";
import AuctionForm from "@/components/auction-form";
import Heading from "@/components/heading";
import React from "react";

export default async function Update({ params }: { params: { id: string } }) {
  const data = await getDetailedViewData(params.id);

  return (
    <div className="mx-auto max-w-[75%] shadow-lg p-10 bg-white rounded-lg">
      <Heading
        title="Update your auction"
        subtitle="Please update the details of your car"
      />

      <AuctionForm auction={data} />
    </div>
  );
}
