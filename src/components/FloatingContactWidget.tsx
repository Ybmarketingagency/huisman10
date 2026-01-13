import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/31618876465?text=Hallo,%20ik%20heb%20een%20vraag%20over%20uw%20diensten"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp contact"
      >
        <MessageCircle size={28} />
      </a>

      <a
        href="tel:078-3690154"
        className="bg-emerald-700 hover:bg-emerald-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Bel ons"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
