import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <Image src="/logo.png" width="40" height="40" />
            <span className="ms-2"> Geb7aly</span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/items">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/items" ? "active" : ""}`
                  }
                >
                  items
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/cart" ? "active" : ""}`
                  }
                >
                  cart
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
