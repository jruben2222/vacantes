import { GraduationCap, FileText, Users, Star, Download, BookOpen, Briefcase, TrendingUp } from 'lucide-react';

const StudentSection = () => {
  const tips = [
    {
      icon: FileText,
      title: "Optimiza tu CV",
      description: "Destaca tus proyectos académicos, prácticas profesionales y habilidades técnicas relevantes.",
      color: "bg-azul-ipl"
    },
    {
      icon: Users,
      title: "Networking Profesional",
      description: "Participa en eventos de la industria.",
      color: "bg-azul-oscuro-ipl"
    },
    {
      icon: Star,
      title: "Destaca tus Fortalezas",
      description: "Enfatiza las competencias técnicas adquiridas en tu formación IPL.",
      color: "bg-amarillo-ipl text-azul-oscuro-ipl"
    },
    {
      icon: BookOpen,
      title: "Educación Continua",
      description: "Mantente actualizado con cursos complementarios y certificaciones.",
      color: "bg-rojo-ipl"
    }
  ];

  const resources = [
    {
      title: "Plantilla de CV Profesional",
      description: "Formato optimizado para el mercado laboral dominicano",
      type: "PDF",
      downloads: "2.3k"
    },
    {
      title: "Guía de Entrevistas",
      description: "Consejos y preguntas frecuentes en el proceso de selección",
      type: "PDF",
      downloads: "1.8k"
    }/* ,
    {
      title: "Portfolio Digital Template",
      description: "Plantilla web para mostrar tus proyectos y habilidades",
      type: "ZIP",
      downloads: "956"
    } */
  ];

  const stats = [
    { label: "Egresados Empleados", value: "89%", icon: Briefcase },
    { label: "Tiempo Promedio de Inserción", value: "3.2", unit: "meses", icon: TrendingUp },
    { label: "Empresas Aliadas", value: "150+", icon: Users },
    { label: "Salario Promedio Inicial", value: "52K", unit: "RD$", icon: Star }
  ];

  return (
    <div className="animate-slide-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-azul-oscuro-ipl mb-4">
          Para Estudiantes y Egresados
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Recursos, consejos y oportunidades diseñadas especialmente para potenciar tu carrera profesional
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-azul-ipl to-azul-oscuro-ipl rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-azul-oscuro-ipl mb-1">
              {stat.value}
              {stat.unit && <span className="text-lg text-gray-600 ml-1">{stat.unit}</span>}
            </div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Tips Section */}
        <div>
          <h3 className="text-3xl font-bold text-azul-oscuro-ipl mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-azul-ipl" />
            Consejos para el Éxito
          </h3>
          
          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${tip.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <tip.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-azul-oscuro-ipl mb-2 group-hover:text-azul-ipl transition-colors duration-300">
                      {tip.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-3xl font-bold text-azul-oscuro-ipl mb-8 flex items-center">
            <Download className="w-8 h-8 mr-3 text-azul-ipl" />
            Recursos Descargables
          </h3>
          
          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold text-azul-oscuro-ipl group-hover:text-azul-ipl transition-colors duration-300">
                        {resource.title}
                      </h4>
                      <span className="bg-gris-claro-ipl text-azul-oscuro-ipl px-2 py-1 rounded-lg text-xs font-bold">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">{resource.description}</p>
                    <p className="text-sm text-azul-ipl font-medium">
                      {resource.downloads} descargas
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-azul-ipl rounded-2xl group-hover:bg-azul-oscuro-ipl transition-colors duration-300 group-hover:scale-110 transform duration-300">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
{/*           <div className="mt-8 bg-gradient-to-br from-azul-ipl to-azul-oscuro-ipl rounded-3xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">¿Necesitas Orientación Personalizada?</h4>
            <p className="text-white/90 mb-6 leading-relaxed">
              Nuestro equipo de carrera profesional está disponible para sesiones de orientación personalizada.
            </p>
            <button className="bg-amarillo-ipl text-azul-oscuro-ipl px-8 py-4 rounded-2xl font-bold hover:bg-white transition-colors duration-300 hover:shadow-lg transform hover:scale-105">
              Solicitar Cita
            </button>
          </div> */}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
        <h3 className="text-3xl font-bold text-azul-oscuro-ipl text-center mb-12">
          Historias de Éxito IPL
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "María Rodriguez",
              career: "Ingeniería en Sistemas",
              position: "Senior Developer en Microsoft",
              quote: "El IPL me preparó no solo técnicamente, sino también con las competencias profesionales necesarias."
            },
            {
              name: "Carlos Jiménez",
              career: "Análisis de Sistemas",
              position: "Data Scientist en Banco Popular",
              quote: "La formación práctica del IPL fue clave para destacar en el mercado laboral."
            },
            {
              name: "Ana Martínez",
              career: "Desarrollo de Software",
              position: "Tech Lead en Claro Dominicana",
              quote: "Gracias al portal de empleos IPL conseguí mi primera oportunidad profesional."
            }
          ].map((story, index) => (
            <div key={index} className="bg-gris-claro-ipl rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-azul-ipl to-azul-oscuro-ipl rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{story.name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-azul-oscuro-ipl">{story.name}</h4>
                  <p className="text-sm text-gray-600">{story.career}</p>
                </div>
              </div>
              <p className="text-azul-ipl font-semibold mb-2">{story.position}</p>
              <p className="text-gray-600 italic leading-relaxed">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSection;