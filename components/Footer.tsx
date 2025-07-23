'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faMapMarkerAlt, 
  faEnvelope, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 safe-area-bottom">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon 
                icon={faHeart} 
                className="text-red-primary text-xl sm:text-2xl" 
              />
              <span className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Aashirwaad Events
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Creating unforgettable moments and beautiful memories for your special day. 
              Premium wedding planning services in Howrah, West Bengal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900">
              Quick Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm sm:text-base text-gray-600 hover:text-red-primary transition-colors duration-300 touch-target"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900">
              Our Services
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                'Wedding Photography',
                'Event Management',
                'Catering Services',
                'Decoration & Design',
                'Entertainment',
                'Venue Selection',
              ].map((service) => (
                <div key={service} className="text-sm sm:text-base text-gray-600">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900">
              Get in Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <FontAwesomeIcon 
                  icon={faMapMarkerAlt} 
                  className="text-red-primary text-base sm:text-lg mt-1 flex-shrink-0" 
                />
                <div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    55/3, Kaliprasad Banerjee Ln<br />
                    Kadam Tala, Howrah<br />
                    WB 711101
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="text-red-primary text-base sm:text-lg flex-shrink-0" 
                />
                <a 
                  href="tel:+918777045982"
                  className="text-sm sm:text-base text-gray-600 hover:text-red-primary transition-colors duration-300 touch-target"
                >
                  +91 87770 45982
                </a>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="text-red-primary text-base sm:text-lg flex-shrink-0" 
                />
                <a 
                  href="mailto:info@aashirwaadevents.com"
                  className="text-sm sm:text-base text-gray-600 hover:text-red-primary transition-colors duration-300 touch-target break-all"
                >
                  info@aashirwaadevents.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
            © 2024 Aashirwaad Events. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
            <span>Made with</span>
            <FontAwesomeIcon 
              icon={faHeart} 
              className="text-red-primary text-base sm:text-lg animate-pulse" 
            />
            <span>in Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;