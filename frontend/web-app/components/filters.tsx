import { useParamsStore } from "@/hooks/use-params-store";
import { Button, ButtonGroup } from "flowbite-react";
import {
  ArrowDownNarrowWide,
  Clock,
  Waypoints,
  Flame,
  AlarmClockCheck,
  BookCheck,
} from "lucide-react";
import React from "react";

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  {
    label: "Alphabetical",
    icon: ArrowDownNarrowWide,
    value: "make",
  },
  {
    label: "End Date",
    icon: Clock,
    value: "endingSoon",
  },
  {
    label: "Recently added",
    icon: Waypoints,
    value: "new",
  },
];

const filterButtons = [
  {
    label: "Live Auctions",
    icon: Flame,
    value: "live",
  },
  {
    label: "Ending < 6 hours",
    icon: AlarmClockCheck,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: BookCheck,
    value: "finished",
  },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sem text-gray-500 mr-2">Filter by</span>
        <Button.Group>
          {filterButtons.map(({ label, icon: LucideIcon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${filterBy === value ? "dark" : "gray"}`}
            >
              <LucideIcon className="mr-3 h-4 w-4" />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>
      <div>
        <span className="uppercase text-sem text-gray-500 mr-2">Order by</span>
        <Button.Group>
          {orderButtons.map(({ label, icon: LucideIcon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${orderBy === value ? "dark" : "gray"}`}
            >
              <LucideIcon className="mr-3 h-4 w-4" />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>
      <div>
        <span className="uppercase text-sem text-gray-500 mr-2">Page size</span>
        <ButtonGroup>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => setParams({ pageSize: value })}
              color={`${pageSize === value ? "dark" : "gray"}`}
              className="focus:ring-0"
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
