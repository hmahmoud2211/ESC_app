import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Shop Section */}
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black text-sm">
                  Modest Active
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black text-sm">
                  Sports Hijabs
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black text-sm">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-black text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-black text-sm">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-black text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-black text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-black text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-black">
                <Twitter size={18} />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-black">
                <Instagram size={18} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
                <Linkedin size={18} />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-black">
                <Facebook size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-6 h-6 mr-2">
              <Image
                src="/images/logo/ESC.svg"
                alt="ESC Logo"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-gray-500">© 2023 ESC Fit Club. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-black">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-gray-500 hover:text-black">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
