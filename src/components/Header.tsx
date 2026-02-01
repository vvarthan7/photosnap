"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <nav className="lg:container-desktop flex justify-between items-center py-4 px-6 md:px-10">
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Logo"
            width={169}
            height={16}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10">
          <li>
            <Link href="/stories">STORIES</Link>
          </li>
          <li>
            <Link href="/features">FEATURES</Link>
          </li>
          <li>
            <Link href="/pricing">PRICING</Link>
          </li>
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
        >
          <Image
            src={
              isMenuOpen
                ? "/assets/shared/mobile/close.svg"
                : "/assets/shared/mobile/menu.svg"
            }
            alt={isMenuOpen ? "Close menu" : "Menu"}
            width={20}
            height={6}
          />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 top-[72px] bg-black/50 md:hidden z-40"
            onClick={toggleMenu}
          />

          {/* Menu */}
          <div className="px-8 py-8 absolute top-full left-0 right-0 bg-white md:hidden z-50">
            <ul className="flex flex-col items-center gap-5 pb-5 border-b border-gray-200">
              <li>
                <Link
                  href="/stories"
                  onClick={toggleMenu}
                  className="text-sm font-bold tracking-[2px]"
                >
                  STORIES
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  onClick={toggleMenu}
                  className="text-sm font-bold tracking-[2px]"
                >
                  FEATURES
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  onClick={toggleMenu}
                  className="text-sm font-bold tracking-[2px]"
                >
                  PRICING
                </Link>
              </li>
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
        </>
      )}
    </header>
  );
};

export default Header;
