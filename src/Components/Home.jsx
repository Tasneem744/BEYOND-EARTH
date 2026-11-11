import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './HeroSection.css';

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/public/assets/Space.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-bottom-gradient"></div>
      </div>

      <div ref={contentRef} className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"></span>
          A NEW ERA OF PLANETARY EXPLORATION
        </div>

        <h1 className="hero-title">
          BEYOND <br />
          <span className="hero-title-highlight">THE HORIZON</span>
        </h1>

        <p className="hero-description">
          Explore distant worlds. Discover Earth's hidden analogs. Unlock the possibilities of life beyond our planet.
        </p>

        <div className="hero-actions">
          <a href="#explore" className="hero-btn-primary">
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#mission" className="hero-btn-secondary">
            Explore the Mission
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
}