import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-lg font-bold text-white">
          DocUploader
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/upload" className="text-gray-300 hover:text-white">
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
