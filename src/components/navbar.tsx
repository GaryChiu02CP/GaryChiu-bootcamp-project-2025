import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <nav>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blogs">Blog</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}