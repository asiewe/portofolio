"use client";

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container flex justify-between items-center">
        {/* logo */}
        <h1 className="text-4xl">Asiewe</h1>

        {/* desktop nav */}
        <div className=" flex gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
