'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faPhone, faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'wedding',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: 'wedding',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 hover-lift">
      <div className="text-center mb-8">
        <h3 className="heading-tertiary text-gray-900 mb-3 sm:mb-4">
          Let's Plan Your Perfect Day
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Share your vision with us and we'll make it a beautiful reality
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-red-primary transition-all duration-300 text-sm sm:text-base touch-target"
                placeholder="Enter your full name"
              />
              <FontAwesomeIcon 
                icon={faUser} 
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" 
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-red-primary transition-all duration-300 text-sm sm:text-base touch-target"
                placeholder="Enter your email"
              />
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" 
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-red-primary transition-all duration-300 text-sm sm:text-base touch-target"
                placeholder="Enter your phone number"
              />
              <FontAwesomeIcon 
                icon={faPhone} 
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" 
              />
            </div>
          </div>

          {/* Event Date Field */}
          <div className="relative">
            <label htmlFor="eventDate" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Event Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-red-primary transition-all duration-300 text-sm sm:text-base touch-target"
              />
              <FontAwesomeIcon 
                icon={faCalendarAlt} 
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" 
              />
            </div>
          </div>
        </div>

        {/* Event Type Field */}
        <div className="relative">
          <label htmlFor="eventType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-red-primary transition-all duration-300 bg-white text-sm sm:text-base touch-target"
          >
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
            <option value="reception">Reception</option>
            <option value="other">Other Event</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
            Tell us about your dream event
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-red-primary transition-all duration-300 resize-vertical text-sm sm:text-base"
              placeholder="Share your vision, preferences, budget, or any specific requirements..."
            />
            <FontAwesomeIcon 
              icon={faComments} 
              className="absolute left-3 sm:left-4 top-5 sm:top-6 text-gray-400 text-sm" 
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary py-4 text-lg flex items-center justify-center space-x-3 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover-glow'
          } touch-target`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} className="text-base sm:text-lg" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="text-center p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium text-sm sm:text-base">
              Thank you! Your message has been sent successfully. We'll contact you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-medium text-sm sm:text-base">
              Sorry, there was an error sending your message. Please try again or call us directly.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;