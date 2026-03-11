import { Smile, Zap, Shield, Sparkles, Stethoscope, Lightbulb, Scissors, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Ortodoncia',
    description: 'Tratamiento de malposiciones dentales. Ortodoncia convencional e invisible.'
  },
  {
    icon: Zap,
    title: 'Urgencias Dentales',
    description: 'Disponible 24/7 via WhatsApp. Concertar cita de emergencia en cualquier momento.'
  },
  {
    icon: Scissors,
    title: 'Cirugía Bucal y Maxilares',
    description: 'Diagnóstico y tratamiento de enfermedades quirúrgicas. Molares retenidos.'
  },
  {
    icon: Shield,
    title: 'Periodoncia',
    description: 'Tratamiento de enfermedades de encías. Inflamación, infección y sangramiento.'
  },
  {
    icon: Sparkles,
    title: 'Implantes y Prótesis',
    description: 'Reemplazo de raíces dentales con tornillos de titanio o cerámica.'
  },
  {
    icon: Lightbulb,
    title: 'Rehabilitación Oral',
    description: 'Mejora de función masticatoria y estética. Carillas y fundas de cerámica.'
  },
  {
    icon: AlertCircle,
    title: 'Biopsias',
    description: 'Diagnóstico precoz de tumores de la boca y lesiones bucales.'
  },
  {
    icon: Stethoscope,
    title: 'Trastornos Temporo-mandibulares',
    description: 'Tratamiento de cuadros dolorosos de la articulación de los maxilares.'
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales de la más alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-100 hover:border-teal-200 group"
              >
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
