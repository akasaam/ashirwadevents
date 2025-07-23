'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, 
  faUtensils, 
  faRing, 
  faMusic, 
  faPalette, 
  faMapMarkedAlt,
  faTimes,
  faCheck,
  faHeart,
  faGift,
  faCar,
  faFlower
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  duration: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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

    // Services grid animation
    gsap.fromTo(servicesRef.current?.children || [], 
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services: Service[] = [
    {
      icon: faCamera,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional photographers and cinematographers who specialize in wedding storytelling.",
      features: [
        "Pre-wedding photoshoot",
        "Wedding ceremony coverage",
        "Reception documentation",
        "Drone photography",
        "Same-day highlight reel",
        "Professional photo editing",
        "Online gallery access",
        "High-resolution image delivery"
      ],
      pricing: "₹25,000 - ₹80,000",
      duration: "Full Day Coverage"
    },
    {
      icon: faUtensils,
      title: "Catering Services",
      description: "Delight your guests with exquisite cuisine featuring traditional Bengali dishes and modern fusion options.",
      features: [
        "Multi-cuisine menu options",
        "Traditional Bengali specialties",
        "Vegetarian & vegan options",
        "Live cooking stations",
        "Dessert & sweet arrangements",
        "Professional service staff",
        "Custom dietary accommodations",
        "Elegant presentation"
      ],
      pricing: "₹350 - ₹800 per plate",
      duration: "Event Duration"
    },
    {
      icon: faRing,
      title: "Wedding Planning",
      description: "Complete end-to-end wedding planning services ensuring every detail is perfectly orchestrated for your special day.",
      features: [
        "Comprehensive planning consultation",
        "Vendor selection & coordination",
        "Timeline management",
        "Budget planning & tracking",
        "Guest list management",
        "Invitation design assistance",
        "Day-of coordination",
        "Emergency management"
      ],
      pricing: "₹50,000 - ₹2,00,000",
      duration: "3-6 Months Planning"
    },
    {
      icon: faMusic,
      title: "Entertainment",
      description: "Create the perfect ambiance with our curated entertainment options including live music, DJs, and cultural performances.",
      features: [
        "Professional DJ services",
        "Live band arrangements",
        "Traditional dance performances",
        "Sound system setup",
        "Lighting arrangements",
        "Microphone & AV equipment",
        "Music consultation",
        "Custom playlist creation"
      ],
      pricing: "₹15,000 - ₹60,000",
      duration: "Event Duration"
    },
    {
      icon: faPalette,
      title: "Decoration & Design",
      description: "Transform your venue with stunning decorations, beautiful floral arrangements, and elegant design elements.",
      features: [
        "Venue decoration design",
        "Floral arrangements",
        "Stage & mandap decoration",
        "Entrance decoration",
        "Lighting design",
        "Backdrop creation",
        "Table centerpieces",
        "Themed decorations"
      ],
      pricing: "₹30,000 - ₹1,50,000",
      duration: "Setup & Event"
    },
    {
      icon: faMapMarkedAlt,
      title: "Venue Selection",
      description: "Find the perfect venue that matches your vision, guest count, and budget with our extensive network of premium locations.",
      features: [
        "Venue scouting & selection",
        "Site visits coordination",
        "Capacity planning",
        "Amenities assessment",
        "Contract negotiation",
        "Booking assistance",
        "Backup venue options",
        "Location logistics planning"
      ],
      pricing: "₹10,000 - ₹30,000",
      duration: "Consultation Process"
    }
  ];

  const additionalServices = [
    {
      icon: faGift,
      title: "Guest Management",
      description: "Comprehensive guest experience management"
    },
    {
      icon: faCar,
      title: "Transportation",
      description: "Wedding transportation coordination"
    },
    {
      icon: faFlower,
      title: "Bridal Services",
      description: "Complete bridal preparation services"
    },
    {
      icon: faHeart,
      title: "Honeymoon Planning",
      description: "Post-wedding travel arrangements"
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="heading-primary text-gray-900 mb-8">
            Our Premium <span className="text-red-primary">Wedding Services</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            From intimate ceremonies to grand celebrations, we offer comprehensive services 
            to make your special day absolutely perfect.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover-lift group cursor-pointer border border-gray-100 hover:border-red-100"
                onClick={() => openModal(service)}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6 group-hover:bg-red-primary transition-all duration-300 group-hover:scale-110">
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="text-3xl text-red-primary group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-red-primary mb-2">
                      {service.pricing}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete your wedding experience with our additional specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover-lift text-center group"
              >
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="text-3xl text-red-primary mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon 
                      icon={selectedService.icon} 
                      className="text-2xl text-red-primary" 
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair text-3xl font-semibold text-gray-900">
                      {selectedService.title}
                    </h3>
                    <p className="text-red-primary font-semibold text-lg">
                      {selectedService.pricing}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-red-primary transition-colors duration-300 text-2xl"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    Service Description
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedService.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                    <p className="text-gray-600">{selectedService.duration}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <FontAwesomeIcon 
                          icon={faCheck} 
                          className="text-green-500 text-sm flex-shrink-0" 
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-gray-600">
                    Ready to book this service for your special day?
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="btn-primary px-6 py-3"
                    onClick={closeModal}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-red-primary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-secondary text-white mb-6">
            Ready to Plan Your Perfect Wedding?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized package that fits your 
            vision and budget perfectly.
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
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}