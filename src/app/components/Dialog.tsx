import { DialogProps } from "@/types/types";
import React from "react";

const Dialog = ({ data, handleStartTime }: DialogProps) => {
  return (
    <div className="mt-[70px] pt-6">
      {data.map(({ role, start, end, content }, index) => (
        <div key={index}>
          <h1 className="capitalize">
            {role}:
          </h1>
          <p
            onClick={() => handleStartTime(start, end)}
            className={`p-2 rounded-lg font-sans cursor-pointer text-lg transition transform hover:scale-110 ${
              role === "agent" ? "bg-yellow-200 text-black" : "bg-red-200 text-black"
            }`}
          >
            {content}
          </p>
          <hr className="border-t border-black my-4" />
        </div>
      ))}
    </div>
  );
};

export default Dialog;
