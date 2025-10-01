'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Important FAQ', href: '/important-faq' },
  ];

  return (
    <header className="bg-[#283add] text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/uploads/2024/08/logo-acess-houses-and-condos-with-text.png"
              alt="Access Houses and Condos"
              width={209}
              height={38}
              priority
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-blue-200 transition-colors tracking-wider"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-transparent border border-white px-4 py-2 rounded text-sm font-medium hover:bg-white hover:text-[#283add] transition-colors"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-400 pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-blue-200 transition-colors tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="bg-transparent border border-white px-4 py-2 rounded text-sm font-medium hover:bg-white hover:text-[#283add] transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;