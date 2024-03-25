import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToogle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
      <Link href="/" className=" font-bold text-3xl">
        OsOff<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
