"use client";
import { CardStack } from "../ui/card";
import { cn } from "../../utils/cn";
export function CardStackDemo() {
  return (
    <div className="h-[10rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "IC Tech Solutions",
    designation: "Aug 2022 - Nov 2023",

    content: (
      <p>
        My Role is to develop,design and maintaining of
        <Highlight>Web Applications</Highlight>that are built using React and
        Django.
      </p>
    ),
  },

  {
    id: 1,
    name: "BootCamp",
    designation: "Nov 2021 - july 2022",

    content: (
      <p>
        Started to Learning Web Development of
        <Highlight>Myself</Highlight> as a Bootcamp From the online Resources
        like W3schools,Udemy and others..
      </p>
    ),
  },
  {
    id: 2,
    name: "Proffesional",
    designation: "try to Keep learning !",

    content: (
      <p>
        Learning to challange the difficulties
        <Highlight>To make Good programmer</Highlight> try to write clean and
        efficient and learning some meta Framworks
      </p>
    ),
  },
];
