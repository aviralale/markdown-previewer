import React, { useState } from "react";
import "./Heading.css";
import Instructions from "./Instructions";
export default function Heading() {
  return (
    <div className="heading flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-center my-4 mb-7 text-white">
        Markdown Editor
      </h1>
      <button className="text-white bg-gray-900 z-[1]">Instructions</button>
      <Instructions/>
    </div>
  );
}
