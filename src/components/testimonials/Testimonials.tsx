import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ta-widget.bolt.host/widget-loader.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://ta-widget.bolt.host/widget-loader.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <div data-widget-id="7646d059-adf0-489e-a96d-e8cfe7b22511"></div>
      </div>
    </section>
  );
};

export default Testimonials;