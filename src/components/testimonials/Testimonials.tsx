import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[#d1d1d1]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="elfsight-app-42e45f1b-bc33-435d-a2a8-d98c1cb4c564" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Testimonials;