"use client";

import React from "react";
import Player from "./components/Player";
import data from "./data.json";
import Dialog from "../app/components/Dialog";

export default function Home() {
  const [start, setStart] = React.useState<number | undefined>(undefined);
  const [endTime, setEndTime] = React.useState<number | undefined>(undefined);

  const handleStartTime = (startTime: number, endTime: number) => {
    setStart(startTime);
    setEndTime(endTime);
  };

  return (
    <div className="bg-black text-white px-8 lg:px-[200px]">
      <Player initialTime={start ?? 0} endTime={endTime ?? 0} />
      <Dialog data={data} handleStartTime={handleStartTime} />
    </div>
  );
}
