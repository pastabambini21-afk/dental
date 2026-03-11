export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/5728316/pexels-photo-5728316.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Consulta Dental'
    },
    {
      url: 'https://images.pexels.com/photos/3845648/pexels-photo-3845648.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Radiografías Dentales'
    },
    {
      url: 'https://images.pexels.com/photos/4269142/pexels-photo-4269142.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Instrumental Dental'
    },
    {
      url: 'https://images.pexels.com/photos/5728317/pexels-photo-5728317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Clínica Profesional'
    },
    {
      url: 'https://images.pexels.com/photos/5728318/pexels-photo-5728318.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Equipo Moderno'
    },
    {
      url: 'https://images.pexels.com/photos/3845647/pexels-photo-3845647.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ambiente Cómodo'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería
          </h2>
          <p className="text-lg text-gray-600">
            Conoce nuestras instalaciones y equipo de última generación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg h-64 md:h-72 group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-lg">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
