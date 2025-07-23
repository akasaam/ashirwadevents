'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faUsers, 
  faStar, 
  faCalendarAlt, 
  faQuoteLeft,
  faAward,
  faHandshake,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%"
        }
      }
    );

    // Story section animation
    gsap.fromTo(storyRef.current?.children || [], 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%"
        }
      }
    );

    // Values animation
    gsap.fromTo(valuesRef.current?.children || [], 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 70%"
        }
      }
    );

    // Timeline animation
    gsap.fromTo(timelineRef.current?.children || [], 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const values = [
    {
      icon: faHeart,
      title: "Passion",
      description: "We pour our heart into every event, treating each wedding as if it were our own."
    },
    {
      icon: faAward,
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring the highest quality service."
    },
    {
      icon: faHandshake,
      title: "Trust",
      description: "Building lasting relationships with our clients through transparency and reliability."
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Constantly evolving our services to bring fresh and creative ideas to your celebration."
    }
  ];

  const timeline = [
    {
      year: "Initial Consultation",
      title: "Dream Discovery",
      description: "We sit down with you to understand your vision, preferences, and budget."
    },
    {
      year: "Planning Phase",
      title: "Detailed Planning",
      description: "Creating comprehensive plans covering every aspect of your special day."
    },
    {
      year: "Vendor Coordination",
      title: "Perfect Partners",
      description: "Selecting and coordinating with the best vendors to bring your vision to life."
    },
    {
      year: "Final Preparations",
      title: "Last Mile Excellence",
      description: "Final checks and preparations to ensure everything is perfect for your big day."
    },
    {
      year: "Wedding Day",
      title: "Your Perfect Day",
      description: "Seamless execution while you focus on celebrating your love story."
    }
  ];

  const stats = [
    { icon: faUsers, number: "200+", label: "Happy Couples" },
    { icon: faStar, number: "5.0", label: "Average Rating" },
    { icon: faCalendarAlt, number: "5+", label: "Years Experience" },
    { icon: faHeart, number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="heading-primary text-gray-900 mb-8">
            About <span className="text-red-primary">Aashirwaad Events</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We are passionate wedding planners dedicated to creating unforgettable celebrations 
            that reflect your unique love story and vision.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-secondary text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded with a passion for creating beautiful moments, Aashirwaad Events has been 
                  the trusted choice for couples in Howrah and across West Bengal. Our journey began 
                  with a simple belief: every love story deserves a perfect celebration.
                </p>
                <p>
                  What started as a small team of wedding enthusiasts has grown into a comprehensive 
                  event planning company, known for our attention to detail, creative vision, and 
                  commitment to making dreams come true.
                </p>
                <p>
                  Today, we take pride in being part of your most important day, bringing together 
                  years of experience, creativity, and genuine care to ensure your wedding is 
                  everything you've dreamed of and more.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover-lift">
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    className="text-4xl text-red-primary mb-4" 
                  />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape the way we serve our clients
            </p>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6 group-hover:bg-red-primary transition-colors duration-300">
                  <FontAwesomeIcon 
                    icon={value.icon} 
                    className="text-2xl text-red-primary group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Your Wedding Journey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From the first consultation to your perfect day, here's how we make magic happen
            </p>
          </div>

          <div ref={timelineRef} className="space-y-12">
            {timeline.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-primary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-50 p-8 rounded-2xl hover-lift">
                  <div className="text-center md:text-left">
                    <div className="text-sm text-red-primary font-semibold mb-2 uppercase tracking-wide">
                      {step.year}
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="section-padding bg-gradient-to-br from-red-primary to-red-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FontAwesomeIcon 
            icon={faQuoteLeft} 
            className="text-5xl text-white/30 mb-8" 
          />
          <blockquote className="font-playfair text-3xl md:text-4xl text-white mb-8 italic leading-relaxed">
            "Love is the bridge between two hearts. We help you build that bridge 
            into a beautiful celebration that lasts a lifetime."
          </blockquote>
          <p className="text-white/90 text-xl">
            - Team Aashirwaad Events
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-secondary text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's sit down over a cup of tea and discuss how we can make your wedding day 
            absolutely perfect. Your dream celebration awaits!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+918777045982"
              className="btn-primary flex items-center space-x-2 hover-glow"
            >
              <span>Call Us Now</span>
            </a>
            <a 
              href="/contact"
              className="btn-outline"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}