"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, User, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        // If scrolling down and past the threshold, hide the navbar
        if (currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
        } else {
          // If scrolling up, show the navbar
          setIsNavbarVisible(true);
        }
      } else {
        // Always show navbar at the top of the page
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-white z-50 shadow-sm transition-all duration-700 ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="p-2 mr-2 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8">
                <Image
                  src="/images/logo/ESC.svg"
                  alt="ESC Logo"
                  width={32}
                  height={32}
                />
              </div>
              <h1 className="text-xl font-bold">ESC</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-black transition-colors font-medium">Shop</Link>
            <Link href="/collections" className="text-gray-700 hover:text-black transition-colors font-medium">Collections</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">Contact</Link>
          </nav>

          <div className="flex items-center space-x-1 md:space-x-4">
            <button
              className="p-2"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link href="/login" className="p-2" aria-label="Account">
              <User size={20} />
            </Link>

            <Link href="/cart" className="p-2 relative" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -right-1 -top-1 w-4 h-4 bg-black rounded-full flex items-center justify-center text-[10px] text-white">2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Search Bar */}
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
