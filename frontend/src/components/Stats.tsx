import React from 'react';
import { TrendingUp, IdCardLanyard, Factory, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '45',
      label: 'Vacantes Activas',
      description: 'Oportunidades disponibles esta semana',
      color: 'bg-azul-ipl'
    },
    {
      icon: IdCardLanyard,
      number: '72',
      label: 'No. aplicaciones por vacantes',
      description: 'Para recibir respuesta de empresas',
      color: 'bg-azul-oscuro-ipl'
    },
    {
      icon: Factory,
      number: '8',
      label: 'No. empresas que han solitado vacantes', 
      description: 'Con oportunidades laborales',
      color: 'bg-rojo-ipl'
    },
    {
      icon: Star,
      number: '4.8',
      label: '% Estudiantes que han obtenido empleo',
      description: 'Promedio de satisfacción empresarial',
      color: 'bg-amarillo-ipl text-azul-oscuro-ipl'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-azul-oscuro-ipl mb-4">
            Impacto en Números
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados que demuestran el éxito de nuestro programa de inserción laboral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gris-claro-ipl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-azul-ipl/20"
            >
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-4xl font-bold text-azul-oscuro-ipl group-hover:text-azul-ipl transition-colors duration-300">
                    {stat.number}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-azul-ipl/0 to-azul-ipl/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;