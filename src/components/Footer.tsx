import React from 'react';
import { Phone, Mail, MapPin, Facebook, Music, ArrowUp } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const footerServices = [
  { name: 'Behangen', link: '/diensten/behanger-inhuren' },
  { name: 'Renovlies', link: '/diensten/renovlies' },
  { name: 'Glasweefsel Behang', link: '/diensten/glasweefsel' },
  { name: 'Binnen Schilderwerk', link: '/diensten/binnen-schilderwerk' },
  { name: 'Airless Spuiten', link: '/diensten/airless-spuiten' },
  { name: 'Vescom Behang', link: '/diensten/vescom' },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const scroll = () => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

    if (location.pathname !== '/') {
      navigate('/');
      // De homepage laadt afbeeldingen na, waardoor de pagina nog verschuift.
      // Daarom een tweede keer scrollen zodra de layout is uitgezakt.
      setTimeout(scroll, 100);
      setTimeout(scroll, 800);
    } else {
      scroll();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://imgur.com/5TMlnlx.png"
                alt="Huisman Wandafwerking"
                className="h-16"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Professionele wandafwerking en schildersdiensten voor particulieren en bedrijven door heel Nederland.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/huismanwandafwerking.nl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@printskilz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Music size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.link}>
                  <Link to={service.link} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-emerald-500" />
                <a href="tel:078-3690154" className="hover:text-emerald-500 transition-colors">078-3690154</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-emerald-500" />
                <a href="mailto:info@huismanwandafwerking.nl" className="hover:text-emerald-500 transition-colors">
                  info@huismanwandafwerking.nl
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-emerald-500 mt-1" />
                <a
                  href="https://maps.google.com/?q=Drienerstraat+77,+7551+HL+Hengelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  <div>
                    <p>Drienerstraat 77</p>
                    <p>7551 HL - Hengelo</p>
                    <p className="text-sm text-gray-400 mt-1">(Werkzaam door heel Nederland)</p>
                  </div>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400 mb-2">Openingstijden:</p>
              <p className="text-gray-400">Maandag t/m vrijdag: 07:00 - 17:00</p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Contact Opnemen
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 Huisman Wandafwerking. Alle rechten voorbehouden.</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">By <a href="https://techazura.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">TechAzura</a></p>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors mt-4 md:mt-0"
            aria-label="Scroll naar boven"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;