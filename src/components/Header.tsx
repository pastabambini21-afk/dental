import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. Alex Arrgote</h1>
              <p className="text-sm text-gray-600">Especialista en Cirugía Bucal</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="tel:+34676417187" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">
              <Phone size={18} />
              <span className="hidden sm:inline">+34 676 417 187</span>
            </a>
            <a href="https://wa.me/34676417187" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="mailto:contacto@drarrgote.com" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">
              <Mail size={18} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a href="#ubicacion" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">
              <MapPin size={18} />
              <span className="hidden sm:inline">Ubicación</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
