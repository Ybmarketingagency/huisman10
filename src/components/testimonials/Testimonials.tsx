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
        <div data-widget-id="bf45970f-5d5f-4dc8-821f-7196974ac923"></div>
      </div>
    </section>
  );
};

export default Testimonials;