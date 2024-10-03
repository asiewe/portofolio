"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./Logo";
import clsx from "clsx";
import useHash from "@/lib/useHash";
import { useState } from "react";

const links = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Expertise",
    path: "#expertise",
  },
  {
    name: "Experience",
    path: "#experience",
  },
  {
    name: "Work",
    path: "#work",
  },
  { name: "Contact", path: "#contact" },
];

const NavMenu = ({
  className,
  menuItemClassName,
  onClickMenuItem,
}: Readonly<{
  className?: string;
  menuItemClassName?: string;
  onClickMenuItem?: () => void;
}>) => {
  const hash = useHash();
  return (
    <nav className={className}>
      {links.map(({ name, path }, index) => {
        return (
          <Link href={path} key={index}>
            <Button
              variant="link"
              className={clsx(
                { "!text-accent": path === hash },
                menuItemClassName,
                "capitalize hover:text-accent"
              )}
              onClick={onClickMenuItem}
            >
              {index + 1}. {name}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const onClickMenuItem = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <CiMenuFries className="text-[32px] cursor-pointer text-primary" />
      </SheetTrigger>
      <SheetContent className="bg-primary text-secondary">
        <div className="mt-20 mb-10 text-center">
          <Logo />
        </div>
        <NavMenu
          className="flex flex-col justify-center items-center gap-8"
          menuItemClassName="text-secondary"
          onClickMenuItem={onClickMenuItem}
        />
      </SheetContent>
    </Sheet>
  );
};

const DesktopNav = () => {
  return <NavMenu className="flex gap-8" />;
};

const Nav = () => {
  return (
    <>
      <div className="hidden xl:flex">
        <DesktopNav />
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Nav;
