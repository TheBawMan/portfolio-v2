import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="pt-4 pb-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <h1 className="absolute text-orange-500 ml-[7.5rem] text-5xl "> 2.0</h1> */}
          <h1 className="text-xl font-bold pt-3">
            TheBawMan
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}

        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=agdipc9@gmail.com"
            target="_blank"
          >
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
