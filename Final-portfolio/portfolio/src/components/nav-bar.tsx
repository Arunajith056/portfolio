import { FloatingNav } from "../ui/flat-nav";
import {
  IconHome,
  IconUser,
  IconPhone,
  IconBriefcase,
  IconFileText,
} from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Work",
      link: "#work",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Resume",
      link: "#resume",
      icon: (
        <IconFileText className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} /> {/* Pass the navItems prop */}
    </div>
  );
}
