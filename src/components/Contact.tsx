import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="ubicacion">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aquí para atenderte. Agenda tu cita hoy mismo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Ubicación</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Carrer del Trinquet, 1<br />
              08500 Vic<br />
              Barcelona, España
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Teléfono</h3>
            <a href="tel:+34676417187" className="text-teal-600 hover:text-teal-700 font-semibold block">
              +34 676 417 187
            </a>
            <p className="text-gray-600 text-sm mt-2">
              Llamadas disponibles
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">WhatsApp</h3>
            <a href="https://wa.me/34676417187" className="text-teal-600 hover:text-teal-700 font-semibold block">
              +34 676 417 187
            </a>
            <p className="text-gray-600 text-sm mt-2">
              24/7 Emergencias
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 lg:col-span-1">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-teal-600" size={28} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Horario</h3>
            <p className="text-gray-600 text-sm">
              Lun - Vie: 9:00 - 21:00<br />
              Sábado: 9:00 - 14:00<br />
              <span className="text-teal-600 font-semibold">24/7 Urgencias</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg p-8 text-white text-center hover:shadow-lg transition-shadow lg:col-span-1 flex flex-col justify-between">
            <div>
              <Mail className="mx-auto mb-4" size={28} />
              <h3 className="font-semibold mb-3">Email</h3>
              <a href="mailto:contacto@drarrgote.com" className="text-white/90 hover:text-white font-semibold block break-all">
                contacto@
                <br />
                drarrgote.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estamos en el corazón de Vic</h3>
            <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.1234567890!2d2.2468!3d42.2316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a4a4a4a4a4a5%3A0x1234567890abcdef!2sCarrer%20del%20Trinquet%2C%201%2C%2008500%20Vic!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
