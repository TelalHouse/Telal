import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.jpeg" 
            alt="بيت التلال للمقاولات" 
            width={180} 
            height={60} 
            className="h-14 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <Link href="/" className="text-gray-800 hover:text-[#4CAF50] font-medium">
            الرئيسية
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#4CAF50] font-medium">
            من نحن
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-[#4CAF50] font-medium">
            خدماتنا
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-[#4CAF50] font-medium">
            مشاريعنا
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#4CAF50] font-medium">
            اتصل بنا
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
