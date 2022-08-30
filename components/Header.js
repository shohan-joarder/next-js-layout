import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link href="/">
          <a className="navbar-brand">Ecommerce</a>
        </Link>
        <ul className="navbar-nav d-flex justify-contenr-right">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
