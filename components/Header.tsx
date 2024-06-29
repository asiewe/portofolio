"use client";

import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
