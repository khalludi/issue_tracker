import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

export default function Navbar() {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b items-center h-14">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="space-x-6 flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
