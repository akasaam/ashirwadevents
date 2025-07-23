'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faMapMarkerAlt, 
  faEnvelope, 
  faClock,
  faWhatsapp,
  faInstagram,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '@/components/ContactForm';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

    // Contact info animation
    gsap.fromTo(contactInfoRef.current?.children || [], 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 70%"
        }
      }
    );

    // Form animation
    gsap.fromTo(formRef.current, 
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const contactInfo = [
    {
      icon: faPhone,
      title: "Call Us",
      details: ["+91 87770 45982"],
      description: "Available 9 AM - 8 PM, 7 days a week",
      action: "tel:+918777045982",
      color: "text-green-500"
    },
    {
      icon: faWhatsapp,
      title: "WhatsApp",
      details: ["+91 87770 45982"],
      description: "Quick responses for immediate queries",
      action: "https://wa.me/918777045982",
      color: "text-green-500"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      details: ["info@aashirwaadevents.com"],
      description: "We'll respond within 24 hours",
      action: "mailto:info@aashirwaadevents.com",
      color: "text-blue-500"
    },
    {
      icon: faMapMarkerAlt,
      title: "Visit Our Office",
      details: [
        "55/3, Kaliprasad Banerjee Ln",
        "Kadam Tala, Howrah",
        "WB 711101"
      ],
      description: "Open for consultations by appointment",
      action: "https://maps.google.com/?q=55/3+Kaliprasad+Banerjee+Ln+Kadam+Tala+Howrah+WB+711101",
      color: "text-red-primary"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      icon: faInstagram,
      url: "https://instagram.com/aashirwaadevents",
      handle: "@aashirwaadevents"
    },
    {
      platform: "WhatsApp",
      icon: faWhatsapp,
      url: "https://wa.me/918777045982",
      handle: "Chat with us"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="heading-primary text-gray-900 mb-8">
            Let's Plan Your <span className="text-red-primary">Perfect Day</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Ready to start planning your dream wedding? Get in touch with us today for a 
            personalized consultation and let's bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div ref={contactInfoRef} className="space-y-8">
              <div>
                <h2 className="heading-secondary text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  We'd love to hear about your wedding plans and discuss how we can make 
                  your special day absolutely perfect. Reach out to us through any of these channels.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-2xl hover-lift group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <FontAwesomeIcon 
                          icon={info.icon} 
                          className={`text-2xl ${info.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-800 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          {info.description}
                        </p>
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : '_self'}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="inline-flex items-center text-red-primary hover:text-red-600 font-medium transition-colors duration-300"
                        >
                          Contact Now
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <FontAwesomeIcon icon={faClock} className="text-2xl text-red-primary" />
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Emergency consultations available by appointment
                </p>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-red-primary transition-colors duration-300 group"
                    >
                      <FontAwesomeIcon 
                        icon={social.icon} 
                        className="text-xl group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div>
                        <div className="font-medium">{social.platform}</div>
                        <div className="text-sm">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Located in the heart of Howrah, we're easily accessible and ready to meet 
              with you for a detailed consultation about your special day.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1547820661647!2d88.34694731495416!3d22.58224998515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f3e4a1a1a1%3A0x1234567890abcdef!2s55%2F3%2C%20Kaliprasad%20Banerjee%20Ln%2C%20Kadam%20Tala%2C%20Howrah%2C%20West%20Bengal%20711101!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aashirwaad Events Location"
              ></iframe>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-red-primary mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600 text-sm">
                    55/3, Kaliprasad Banerjee Ln<br />
                    Kadam Tala, Howrah, WB 711101
                  </p>
                </div>
                
                <div className="text-center">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl text-red-primary mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600 text-sm">
                    +91 87770 45982
                  </p>
                </div>
                
                <div className="text-center">
                  <FontAwesomeIcon icon={faClock} className="text-2xl text-red-primary mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Consultation</h4>
                  <p className="text-gray-600 text-sm">
                    By appointment<br />
                    9 AM - 8 PM Daily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-red-primary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FontAwesomeIcon 
            icon={faHeart} 
            className="text-5xl text-white/30 mb-8" 
          />
          <h2 className="heading-secondary text-white mb-6">
            Your Dream Wedding Awaits
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
            Every great wedding story begins with a conversation. Let's start writing yours today. 
            Contact us now and let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+918777045982"
              className="bg-white text-red-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/918777045982"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-red-primary transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}