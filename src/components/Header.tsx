"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NAV_LINKS = [
  { href: "/stories", label: "STORIES" },
  { href: "/features", label: "FEATURES" },
  { href: "/pricing", label: "PRICING" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <nav className="container-desktop flex justify-between items-center py-7 px-6 md:px-10 lg:px-0 z-50">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={169}
            height={16}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-preset-7 font-bold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button variant="primary" href="/invite">
            GET AN INVITE
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <Image
            src={
              isMenuOpen
                ? "/assets/shared/mobile/close.svg"
                : "/assets/shared/mobile/menu.svg"
            }
            alt={isMenuOpen ? "Close menu" : "Menu"}
            width={isMenuOpen ? 15 : 20}
            height={isMenuOpen ? 15 : 6}
          />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden z-40">
          {/* Overlay */}
          <div className="absolute top-px left-0 right-0 h-screen bg-black/50" />

          {/* Menu */}
          <div id="mobile-menu" className="relative px-8 py-8 bg-white z-50">
            <ul className="flex flex-col items-center gap-5 pb-5 border-b border-gray-200">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-bold tracking-[2px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-5 w-full flex justify-center">
              <Button
                variant="primary"
                href="/invite"
                className="w-full text-center"
              >
                GET AN INVITE
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
