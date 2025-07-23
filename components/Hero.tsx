'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import CanvasBackground from './CanvasBackground';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Initial state - hide all elements
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, scrollIndicatorRef.current], {
      opacity: 0,
      y: 50
    });

    // Animate elements in sequence
    timeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2
    });

    return () => {
      timeline.kill();
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about') || document.querySelector('section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.open('tel:+918777045982', '_self');
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden safe-area-top"
    >
      {/* Video Background */}
      <video
        id="hero-bg-video"
        className="absolute z-0"
        src="/video/bg-video1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          left: '50%',
          top: '50%',
          position: 'absolute',
          width: '100vh',
          height: '100vw',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: 'translate(-50%, -50%) rotate(-90deg)',
        }}
      />
      <style>{`
        @media (max-aspect-ratio: 10/16) {
          #hero-bg-video {
            width: 100vw !important;
            height: 100vh !important;
            transform: translate(-50%, -50%) rotate(0deg) !important;
          }
        }
      `}</style>
      {/* Canvas Background */}
      <CanvasBackground />
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto container-padding pt-20 sm:pt-24 lg:pt-0">
        <h1 
          ref={titleRef}
          className="heading-primary mb-6 sm:mb-8 text-white"
        >
          Create Your Perfect
          <span className="text-red-primary block mt-2 sm:mt-4">
            Wedding Day
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
        >
          Transform your special day into an unforgettable celebration with our premium 
          wedding planning services in Howrah, West Bengal.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <button 
            onClick={handleCallNow}
            className="btn-primary flex items-center space-x-2 sm:space-x-3 hover-glow text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faPhone} className="text-sm sm:text-base" />
            <span className="whitespace-nowrap">Call Now: +91 87770 45982</span>
          </button>
          
          <button 
            onClick={scrollToNextSection}
            className="btn-outline text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 w-full sm:w-auto"
          >
            Explore Our Services
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        onClick={scrollToNextSection}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group hidden sm:block"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500 text-sm font-medium group-hover:text-red-primary transition-colors duration-300">
            Scroll to explore
          </span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className="text-red-primary text-xl group-hover:translate-y-1 transition-transform duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;