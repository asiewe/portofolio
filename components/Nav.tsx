"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./Logo";
import clsx from "clsx";

const links = [
  {
    name: "About",
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
  { name: "Contact", path: "/contact" },
];

const NavMenu = ({
  className,
  menuItemClassName,
}: Readonly<{ className?: string; menuItemClassName?: string }>) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      {links.map(({ name, path }, index) => {
        return (
          <Link href={path} key={index}>
            <Button
              variant="link"
              className={clsx(
                { "!text-accent": path === pathname },
                menuItemClassName,
                "capitalize hover:text-accent"
              )}
            >
              0{index + 1}. {name}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuFries className="text-[32px] cursor-pointer text-primary" />
      </SheetTrigger>
      <SheetContent className="bg-primary text-secondary">
        <div className="mt-32 mb-40 text-center">
          <Logo />
        </div>
        <NavMenu
          className="flex flex-col justify-center items-center gap-8"
          menuItemClassName="text-secondary"
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
