"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { link } from "fs";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Expertise",
    path: "/expertise",
  },
  {
    name: "Work",
    path: "/work",
  },

  {
    name: "Experience",
    path: "/experience",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }, index) => {
        return (
          <Link href={path} key={index}>
            <Button
              variant="link"
              className={`${path === pathname && "underline"}`}
            >
              {name}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
