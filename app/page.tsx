'use client';

import Hero from '@/components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, 
  faUtensils, 
  faRing, 
  faMusic, 
  faPalette, 
  faMapMarkedAlt,
  faHeart,
  faStar,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const services = [
    {
      icon: faCamera,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional photographers and videographers."
    },
    {
      icon: faUtensils,
      title: "Catering Services",
      description: "Delight your guests with exquisite cuisine tailored to your preferences."
    },
    {
      icon: faRing,
      title: "Wedding Planning",
      description: "Complete wedding planning from concept to execution for your perfect day."
    },
    {
      icon: faMusic,
      title: "Entertainment",
      description: "Create the perfect ambiance with our curated entertainment options."
    },
    {
      icon: faPalette,
      title: "Decoration & Design",
      description: "Transform your venue with stunning decorations and beautiful floral arrangements."
    },
    {
      icon: faMapMarkedAlt,
      title: "Venue Selection",
      description: "Find the perfect venue that matches your vision and budget."
    }
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      rating: 5,
      text: "Aashirwaad Events made our wedding day absolutely perfect. Every detail was handled with care and professionalism."
    },
    {
      name: "Sneha & Amit",
      rating: 5,
      text: "From planning to execution, the team exceeded our expectations. Our guests are still talking about our beautiful wedding!"
    },
    {
      name: "Kavya & Rohit",
      rating: 5,
      text: "The attention to detail and creativity of Aashirwaad Events is unmatched. They truly made our dreams come true."
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Our Premium Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We offer comprehensive wedding planning services to make your special day unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="responsive-card hover-lift group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-red-50 rounded-full mb-4 sm:mb-6 group-hover:bg-red-primary transition-colors duration-300">
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="text-xl sm:text-2xl text-red-primary group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="heading-secondary text-gray-900 mb-6 sm:mb-8 mobile-center">
                Creating Beautiful Moments Since Years
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  At Aashirwaad Events, we believe that every wedding is a unique love story that deserves 
                  to be celebrated in its own special way. Based in the heart of Howrah, West Bengal, 
                  we have been creating magical wedding experiences for couples across the region.
                </p>
                <p>
                  Our team of experienced professionals is dedicated to transforming your dreams into 
                  reality. From intimate ceremonies to grand celebrations, we handle every detail with 
                  precision and care, ensuring your special day is nothing short of perfect.
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-4">
                  <FontAwesomeIcon icon={faHeart} className="text-red-primary text-xl sm:text-2xl" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                    Made with love and dedication in Bengal
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="text-center">
                  <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    className="text-3xl sm:text-4xl text-red-primary mb-4 sm:mb-6" 
                  />
                  <blockquote className="font-playfair text-lg sm:text-xl lg:text-2xl text-gray-800 mb-4 sm:mb-6 italic leading-relaxed">
                    "Your wedding day should be a reflection of your unique love story"
                  </blockquote>
                  <p className="text-sm sm:text-base text-gray-600">
                    - Aashirwaad Events Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              What Our Couples Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Don't just take our word for it - hear from the couples we've had the privilege to serve
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="responsive-card hover-lift"
              >
                <div className="text-center">
                  <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    className="text-2xl sm:text-3xl text-red-primary mb-4 sm:mb-6" 
                  />
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-center space-x-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i}
                        icon={faStar} 
                        className="text-yellow-400 text-base sm:text-lg" 
                      />
                    ))}
                  </div>
                  <h4 className="font-playfair text-base sm:text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-red-primary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-secondary text-white mb-4 sm:mb-6">
            Ready to Plan Your Perfect Wedding?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Let's create beautiful memories together. Contact us today for a personalized 
            consultation and let's bring your dream wedding to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <a 
              href="tel:+918777045982"
              className="bg-white text-red-primary px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto touch-target"
            >
              <span className="whitespace-nowrap">Call: +91 87770 45982</span>
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-red-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto touch-target"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}