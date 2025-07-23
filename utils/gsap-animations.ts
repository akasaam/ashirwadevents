import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation utilities for consistent effects across the site

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      delay,
      ease: "power3.out" 
    }
  );
};

export const fadeInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, x: -50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1, 
      delay,
      ease: "power3.out" 
    }
  );
};

export const fadeInRight = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, x: 50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1, 
      delay,
      ease: "power3.out" 
    }
  );
};

export const scaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element, 
    { opacity: 0, scale: 0.8 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 0.8, 
      delay,
      ease: "back.out(1.7)" 
    }
  );
};

export const staggerFadeInUp = (elements: string | NodeListOf<Element>, staggerDelay: number = 0.1) => {
  return gsap.fromTo(elements, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: staggerDelay,
      ease: "power3.out" 
    }
  );
};

export const parallaxScroll = (element: string | Element, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: speed
    }
  });
};

export const pinSection = (element: string | Element, endTrigger?: string) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top top",
    end: endTrigger ? `${endTrigger} bottom` : "bottom top",
    pin: true,
    pinSpacing: false
  });
};

export const horizontalScroll = (container: string | Element, sections: string | NodeListOf<Element>) => {
  const sectionsElement = typeof sections === 'string' ? document.querySelectorAll(sections) : sections;
  
  return gsap.to(sectionsElement, {
    xPercent: -100 * (sectionsElement.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsElement.length - 1),
      end: () => `+=${(sectionsElement as NodeListOf<Element>).length * 100}%`
    }
  });
};

export const morphingText = (element: string | Element, texts: string[], duration: number = 2) => {
  const tl = gsap.timeline({ repeat: -1 });
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  
  texts.forEach((text, index) => {
    tl.to(el, {
      duration: 0.3,
      opacity: 0,
      ease: "power2.inOut"
    })
    .call(() => {
      if (el) el.textContent = text;
    })
    .to(el, {
      duration: 0.3,
      opacity: 1,
      ease: "power2.inOut"
    })
    .to({}, { duration });
  });
  
  return tl;
};

export const floatingAnimation = (element: string | Element, intensity: number = 20) => {
  return gsap.to(element, {
    y: intensity,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};

export const hoverLift = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  
  const handleMouseEnter = () => {
    gsap.to(el, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(el, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  if (el) {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
  }
  
  return () => {
    if (el) {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    }
  };
};

export const typewriterEffect = (element: string | Element, text: string, speed: number = 0.1) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  el.textContent = '';
  
  return gsap.to({}, {
    duration: text.length * speed,
    ease: "none",
    onUpdate: function() {
      const progress = this.progress();
      const currentLength = Math.floor(progress * text.length);
      el.textContent = text.slice(0, currentLength);
    }
  });
};

export const revealText = (element: string | Element, duration: number = 1.5) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Split text into words
  const text = el.textContent || '';
  const words = text.split(' ');
  
  el.innerHTML = words.map(word => 
    `<span class="word" style="display: inline-block; overflow: hidden;">
       <span style="display: inline-block; transform: translateY(100%);">${word}&nbsp;</span>
     </span>`
  ).join('');
  
  const wordSpans = el.querySelectorAll('.word span');
  
  return gsap.to(wordSpans, {
    y: 0,
    duration: duration,
    stagger: 0.1,
    ease: "power3.out"
  });
};

// Cleanup function to kill all ScrollTriggers
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Refresh ScrollTrigger after dynamic content changes
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};