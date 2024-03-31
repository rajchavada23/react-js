import React, { useState } from "react";

const someColors = [
  "Red",
  "Green",
  "Blue",
  "Olive",
  "Gray",
  "Yellow",
  "Pink",
  "Purple",
  "Lavender",
  "White",
  "Black",
];


function ColorButtons() {
  const [colors, setColors] = useState("Olive");

  const onClick = (color) => {
    setColors(color);
  };

  const handleTextColor = (color) => {
    switch (color) {
      case "White":
        return "text-black";
      case "Yellow":
        return "text-black";
      case "Pink":
        return "text-black";
      case "Lavender":
        return "text-black";
      default:
        return "text-white";
    }
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colors }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {someColors.map((color, index) => (
            <button
              className={`outline-none px-4 py-1 rounded-full shadow-lg ${handleTextColor(
                color
              )}`}
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => {
                onClick(color);
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorButtons;
