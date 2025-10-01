'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#272525] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <p>8 Sampson Mews, suite 201</p>
          <p>Toronto, ON M3C 0H5</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#3078e4] transition-colors">Home</Link></li>
            <li><Link href="/projects" className="hover:text-[#3078e4] transition-colors">Projects</Link></li>
            <li><Link href="/about" className="hover:text-[#3078e4] transition-colors">About us</Link></li>
            <li><Link href="/important-faq" className="hover:text-[#3078e4] transition-colors">Important FAQ</Link></li>
            <li><Link href="/contact-us" className="hover:text-[#3078e4] transition-colors">Contact us</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Access Houses and Condos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
