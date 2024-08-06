"use client";

import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-[8vh] flex flex-col justify-center">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
