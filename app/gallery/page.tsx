'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  couple?: string;
  location?: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60",
      alt: "Beautiful wedding ceremony",
      category: "ceremony",
      couple: "Priya & Raj",
      location: "Howrah"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding decoration",
      category: "decoration",
      couple: "Sneha & Amit",
      location: "Kolkata"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding photography",
      category: "photography",
      couple: "Kavya & Rohit",
      location: "Howrah"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding reception",
      category: "reception",
      couple: "Anita & Vikash",
      location: "Howrah"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&auto=format&fit=crop&q=60",
      alt: "Bridal preparation",
      category: "photography",
      couple: "Meera & Suraj",
      location: "Kolkata"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding venue decoration",
      category: "decoration",
      couple: "Riya & Arjun",
      location: "Howrah"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding ceremony rituals",
      category: "ceremony",
      couple: "Diya & Karan",
      location: "Howrah"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding reception celebration",
      category: "reception",
      couple: "Pooja & Rahul",
      location: "Kolkata"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=60",
      alt: "Wedding photography session",
      category: "photography",
      couple: "Shruti & Dev",
      location: "Howrah"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ceremony', label: 'Ceremonies' },
    { id: 'decoration', label: 'Decorations' },
    { id: 'photography', label: 'Photography' },
    { id: 'reception', label: 'Receptions' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

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

    // Gallery animation
    gsap.fromTo(galleryRef.current?.children || [], 
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filter]);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-red-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="heading-primary text-gray-900 mb-8">
            Our Wedding <span className="text-red-primary">Gallery</span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Explore the beautiful moments we've captured and the magical celebrations we've created 
            for couples across West Bengal.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-red-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover-lift"
                onClick={() => openModal(image)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <FontAwesomeIcon icon={faHeart} className="text-3xl mb-2" />
                      <p className="font-medium">{image.couple}</p>
                      <p className="text-sm">{image.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-red-primary transition-colors duration-300 text-3xl z-10"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-red-primary transition-colors duration-300 text-3xl z-10"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-red-primary transition-colors duration-300 text-3xl z-10"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] mx-auto p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white text-center">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              <h3 className="font-playfair text-xl font-semibold mb-1">
                {selectedImage.couple}
              </h3>
              <p className="text-white/80">
                {selectedImage.location} • {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="heading-secondary text-gray-900 mb-6">
            Create Your Own Beautiful Story
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Every wedding is unique, and we'd love to capture your special moments just like these. 
            Let's discuss how we can make your wedding day absolutely magical.
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
              Plan Your Wedding
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}