import { Award, Users } from 'lucide-react';

export default function Team() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Equipo Profesional
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Dr. Alex Argotte Castillo
                  </h3>
                  <p className="text-lg text-teal-600 font-semibold mb-3">
                    Odontólogo Especialista en Cirugía Bucal
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Director Médico de la clínica con más de 15 años de experiencia en tratamientos odontológicos complejos y de última generación.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Colegio de Odontólogos y Estomatólogos de Cataluña (COEC) Nº 8207</p>
                    <p>Especialista en Cirugía Bucal y Maxilofacial</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Users className="text-teal-600" size={32} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Equipo Dedicado</h4>
                      <p className="text-gray-600">
                        En la clínica dental Dr. Alex Argotte nos gusta la dedicación, experiencia y pasión en cada tratamiento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <img
                  src="https://images.pexels.com/photos/4268567/pexels-photo-4268567.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dr. Alex Argotte"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Award className="text-teal-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                <p className="text-gray-600 text-sm">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <Users className="text-teal-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">5000+</div>
                <p className="text-gray-600 text-sm">Pacientes Satisfechos</p>
              </div>
              <div className="text-center">
                <Award className="text-teal-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <p className="text-gray-600 text-sm">Profesionalismo</p>
              </div>
              <div className="text-center">
                <Users className="text-teal-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <p className="text-gray-600 text-sm">Urgencias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
