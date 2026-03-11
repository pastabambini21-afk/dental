import { Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 opacity-95"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tu Sonrisa es Nuestra Prioridad
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
            Clínica Dental Dr. Alex Arrgote
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Especialista en Cirugía Bucal con más de 15 años de experiencia. Ofrecemos tratamientos de la más alta calidad en un ambiente profesional y cómodo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+34676417187" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 inline-flex">
              <Calendar size={24} />
              Agendar Cita
            </a>
            <a href="https://wa.me/34676417187" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/40 flex items-center justify-center gap-2 inline-flex">
              <Phone size={24} />
              WhatsApp
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-white/80">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm text-white/80">Pacientes Satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-white/80">Urgencias Disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
