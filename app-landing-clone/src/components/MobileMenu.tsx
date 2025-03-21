"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { X, Menu, User, ShoppingBag, Search } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <Image
                  src="/images/logo/ESC.svg"
                  alt="ESC Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-bold text-lg">ESC</span>
            </div>
            <button onClick={onClose} className="p-2">
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block py-2 hover:text-black/70 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="block py-2 hover:text-black/70 font-medium">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/collections" className="block py-2 hover:text-black/70 font-medium">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 hover:text-black/70 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 hover:text-black/70 font-medium">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-8 space-y-4">
              <Link href="/account" className="flex items-center gap-2 py-2 hover:text-black/70">
                <User size={20} />
                <span>My Account</span>
              </Link>
              <Link href="/cart" className="flex items-center gap-2 py-2 hover:text-black/70">
                <ShoppingBag size={20} />
                <span>Cart</span>
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button className="w-full bg-black text-white hover:bg-black/80">Sign In / Register</Button>
          </div>
        </div>
      </div>
    </>
  );
}
