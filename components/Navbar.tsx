'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-area-top ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <FontAwesomeIcon 
              icon={faHeart} 
              className="text-red-primary text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300" 
            />
            <span className="font-playfair text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-primary transition-colors duration-300">
              Aashirwaad Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 font-medium hover:text-red-primary transition-colors duration-300 relative group text-sm xl:text-base"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-2 hover-glow text-sm xl:text-base"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 hover:text-red-primary transition-colors duration-300 touch-target"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              className="text-xl sm:text-2xl" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-lg mt-4 p-4 sm:p-6 shadow-xl">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 sm:py-4 text-gray-900 font-medium hover:text-red-primary transition-colors duration-300 border-b border-gray-100 last:border-b-0 touch-target text-base sm:text-lg"
                onClick={closeMenu}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={(e) => {
                scrollToContact(e);
                closeMenu();
              }}
              className="btn-primary w-full mt-4 sm:mt-6 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;