import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X, Globe2 } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll event listener for smooth background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <Globe2 className="logo-planet" />
          </div>
          <span className="logo-text">
            BEYOND <span className="logo-highlight">EARTH</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/explore" className="nav-link">Explore</Link>
          <Link to="/discover" className="nav-link">Discover</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Prominent CTA Button */}
        <div className="navbar-cta-desktop">
          <Link to="/explore" className="navbar-cta-btn">
            <Compass className="w-4 h-4" />
            Start Exploring
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/explore" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Explore</Link>
        <Link to="/discover" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Discover</Link>
        <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/explore" className="mobile-cta-btn-mobile" onClick={() => setMobileMenuOpen(false)}>
          Start Exploring
        </Link>
      </div>
    </nav>
  );
}