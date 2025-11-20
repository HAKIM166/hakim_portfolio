"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* A11y header for dialog */}
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Open navigation links for the Hakim portfolio website.
          </SheetDescription>
        </SheetHeader>

        {/* Logo (same as header) */}
        <div className="mt-20 mb-32 flex justify-center mix-blend-lighten">
          <Link href="/">
            <div className="relative h-14 w-48 md:h-16 md:w-56">
              <Image
                src="/assets/logo-hakim.png"
                alt="Hakim logo"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* nav links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <SheetClose asChild key={link.path}>
              <Link
                href={link.path}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  pathname === link.path ? "text-accent border-b-2 border-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
