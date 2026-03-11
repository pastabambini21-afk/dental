import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-2">Dr. Alex Argotte</h3>
            <p className="text-gray-400 mb-4">
              Especialista en Cirugía Bucal - Cuidando tu sonrisa desde 2009
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+34676417187" className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
                <Phone size={18} />
                <span>+34 676 417 187</span>
              </a>
              <a href="mailto:contacto@drarrgote.com" className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
                <Mail size={18} />
                <span>contacto@drarrgote.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Carrer del Trinquet, 1<br />08500 Vic, Barcelona</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p><span className="font-semibold">Lunes a Viernes:</span> 9:00 - 21:00</p>
              <p><span className="font-semibold">Sábados:</span> 9:00 - 14:00</p>
              <p><span className="font-semibold">Emergencias:</span> 24/7 WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Dr. Alex Argotte Castillo. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Colegio de Odontólogos y Estomatólogos de Cataluña (COEC) Nº 8207
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
