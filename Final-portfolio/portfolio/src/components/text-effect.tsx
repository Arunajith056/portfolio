"use client";
import { TypewriterEffectSmooth } from "../ui/type-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "a",
    },
    {
      text: "Full Stack ",
    },

    {
      text: "Web-Developer.",
      className:
        "text-blue-500 dark:bg-clip-text dark:text-transparent bg-gradient-to-br from-blue-700 via-red-400 to-yellow-300",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center md:h-[30rem] h-[20rem] font-sans font-semibold">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
