"use client";

import { useParamsStore } from "@/hooks/use-params-store";
import React from "react";
import Heading from "./heading";
import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

interface Props {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  showLogin?: boolean;
  callbackUrl?: string;
}

export default function EmptyFilter({
  title = "No matches for this filter",
  subtitle = "Try changing or resetting the filter",
  showReset,
  showLogin,
  callbackUrl,
}: Props) {
  const reset = useParamsStore((state) => state.reset);
  return (
    <div className="h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4">
        {showReset && (
          <Button color="dark" outline onClick={reset}>
            Remove Filters
          </Button>
        )}
        {showLogin && (
          <Button
            color="dark"
            outline
            onClick={() => signIn("id-server", { callbackUrl })}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
