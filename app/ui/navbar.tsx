"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="hidden 2xl:flex items-center gap-8">
        {links.map((link) => (
          <div
            key={link.name}
            className={clsx(
              "border-b-3",
              isActive(link.href) ? "border-primary-200" : "border-transparent"
            )}
          >
            <Link
              href="/"
              className={clsx(
                "text-xl",
                isActive(link.href)
                  ? "font-bold text-primary-200"
                  : "font-normal text-primary-200"
              )}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
      <button type="button" className="2xl:hidden cursor-pointer">
        <Image src={"/icon_menu.svg"} alt="menu" width={24} height={24} />
      </button>
    </>
  );
}
