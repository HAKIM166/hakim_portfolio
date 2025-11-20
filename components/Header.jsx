import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-40 md:h-14 md:w-52 lg:h-16 lg:w-40 mix-blend-lighten">
            <Image
              src="/assets/logo-hakim.png"
              alt="Hakim logo"
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 160px"
              className="object-contain"
              priority
            />
          </div>
          <span className="sr-only">Hakim</span>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
