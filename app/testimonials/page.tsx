'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faHeart, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: number;
  name: string;
  couple: string;
  rating: number;
  text: string;
  weddingDate: string;
  location: string;
  category: string;
  avatar: string;
}

export default function Testimonials() {
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out"
      }
    );

    // Testimonials animation
    gsap.fromTo(testimonialsRef.current?.children || [], 
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%"
        }
      }
    );

    // Stats animation
    gsap.fromTo(statsRef.current?.children || [], 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      couple: "Priya & Raj",
      rating: 5,
      text: "Aashirwaad Events made our wedding day absolutely perfect! From the initial planning to the final moment, every detail was handled with such care and professionalism. The team's creativity in decoration and their ability to coordinate everything seamlessly was remarkable. Our guests are still talking about how beautiful and well-organized our wedding was. Thank you for making our dreams come true!",
      weddingDate: "December 2023",
      location: "Howrah",
      category: "Complete Wedding Planning",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Sneha Ghosh",
      couple: "Sneha & Amit",
      rating: 5,
      text: "We chose Aashirwaad Events for our destination wedding, and it was the best decision ever! The team managed everything from vendor coordination to guest management flawlessly. The photography team captured every precious moment beautifully, and the catering was exceptional - our guests loved the traditional Bengali cuisine. The attention to detail was incredible, and they made sure we could enjoy our special day stress-free.",
      weddingDate: "November 2023",
      location: "Kolkata",
      category: "Destination Wedding",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Kavya Chatterjee",
      couple: "Kavya & Rohit",
      rating: 5,
      text: "The team at Aashirwaad Events exceeded all our expectations! Their creativity in transforming our venue was absolutely stunning. The floral arrangements and lighting created such a magical atmosphere. What impressed us most was their professionalism and how they handled every challenge with grace. The wedding timeline was executed perfectly, and everything happened exactly as planned. Highly recommended!",
      weddingDate: "January 2024",
      location: "Howrah",
      category: "Traditional Wedding",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      name: "Anita Roy",
      couple: "Anita & Vikash",
      rating: 5,
      text: "From our first meeting to the last dance of our reception, Aashirwaad Events was with us every step of the way. They listened to our vision and brought it to life in ways we never imagined. The coordination between all the vendors was seamless, and the day-of management was perfect. We felt like royalty on our wedding day, and it's all thanks to this amazing team!",
      weddingDate: "October 2023",
      location: "Howrah",
      category: "Grand Reception",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      name: "Meera Banerjee",
      couple: "Meera & Suraj",
      rating: 5,
      text: "Planning a wedding during busy work schedules seemed impossible until we found Aashirwaad Events. They took care of everything! The team's expertise in Bengali wedding traditions combined with modern elements created the perfect blend for our celebration. The guest management was excellent, and everyone had a wonderful time. We couldn't have asked for a better wedding planning experience!",
      weddingDate: "February 2024",
      location: "Kolkata",
      category: "Traditional Bengali Wedding",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      name: "Riya Das",
      couple: "Riya & Arjun",
      rating: 5,
      text: "The attention to detail and personal touch that Aashirwaad Events brought to our wedding was incredible. They understood our budget constraints and still managed to create a magical experience. The decoration was breathtaking, the food was delicious, and the entertainment was perfectly planned. Every guest complimented us on how well-organized and beautiful our wedding was. Thank you for making our day so special!",
      weddingDate: "March 2024",
      location: "Howrah",
      category: "Budget-Friendly Wedding",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60"
    }
  ];

  const stats = [
    { icon: faUsers, number: "200+", label: "Happy Couples", color: "text-blue-500" },
    { icon: faStar, number: "5.0", label: "Average Rating", color: "text-yellow-500" },
    { icon: faCalendarAlt, number: "5+", label: "Years Experience", color: "text-green-500" },
    { icon: faHeart, number: "100%", label: "Satisfaction Rate", color: "text-red-primary" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="heading-primary text-gray-900 mb-8">
            What Our <span className="text-red-primary">Couples Say</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Don't just take our word for it - hear directly from the couples we've had the 
            privilege to serve and the beautiful memories we've helped create together.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift">
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  className={`text-4xl mb-4 ${stat.color}`}
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
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white p-8 rounded-2xl shadow-lg hover-lift group ${
                  index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="text-center mb-6">
                  <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    className="text-4xl text-red-primary/20 group-hover:text-red-primary/40 transition-colors duration-300" 
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon 
                      key={i}
                      icon={faStar} 
                      className="text-yellow-400 text-lg" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-8 italic text-center">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-50"
                  />
                  <div className="text-center">
                    <h4 className="font-playfair text-xl font-semibold text-gray-900">
                      {testimonial.couple}
                    </h4>
                    <div className="text-gray-600 text-sm">
                      {testimonial.weddingDate} • {testimonial.location}
                    </div>
                    <div className="text-red-primary text-sm font-medium mt-1">
                      {testimonial.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Why Couples Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence and attention to detail has made us the preferred 
              choice for couples across West Bengal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                Award-Winning Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized for our exceptional wedding planning services and customer satisfaction
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="text-6xl mb-6">💝</div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                Personalized Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every wedding is unique, and we tailor our services to match your specific vision
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                Trusted Partners
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term relationships with the best vendors ensuring quality and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-primary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-secondary text-white mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the growing list of happy couples who trusted us with their special day. 
            Let's make your wedding celebration absolutely perfect!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+918777045982"
              className="bg-white text-red-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Call: +91 87770 45982
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-red-primary transition-all duration-300 hover:scale-105"
            >
              Start Planning Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}