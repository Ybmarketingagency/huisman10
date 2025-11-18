import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Home } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={goToHome}
            className="flex-shrink-0"
          >
            <img src="https://i.imgur.com/DKSDjVc.png" alt="Huisman Wandafwerking" className="h-16" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-grow">
            <button 
              onClick={goToHome}
              className="text-gray-800 hover:text-emerald-600 transition-colors flex items-center"
            >
              <Home size={20} className="mr-1" />
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-emerald-600 transition-colors">Diensten</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-emerald-600 transition-colors">Over Ons</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-800 hover:text-emerald-600 transition-colors">Projecten</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-800 hover:text-emerald-600 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-800 hover:text-emerald-600 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-emerald-600 transition-colors">Contact</button>
          </div>

          {/* Offerte Button */}
          <div className="hidden md:block">
            <Link 
              to="/offerte" 
              onClick={() => setIsOpen(false)}
              className="flex items-center bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-md transition-colors"
            >
              <FileText size={18} className="mr-2" />
              Offerte
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={goToHome}
                className="flex items-center justify-center text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                <Home size={18} className="mr-2" />
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                Diensten
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                Over Ons
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                Projecten
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2"
              >
                Contact
              </button>
              <Link 
                to="/offerte" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-md transition-colors"
              >
                <FileText size={18} className="mr-2" />
                Offerte
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;