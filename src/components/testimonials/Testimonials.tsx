import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://ta-widget.netlify.app/widget-loader.js";
    script.setAttribute('data-widget-id', 'be69b558-4d0c-4d1d-9e00-4fc00115e2e7');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <div id="google-reviews-widget-be69b558-4d0c-4d1d-9e00-4fc00115e2e7"></div>
      </div>
    </section>
  );
};

export default Testimonials;