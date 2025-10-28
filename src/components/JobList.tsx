import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, BookOpen, Filter, Eye } from 'lucide-react';

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Desarrollador Frontend React',
      company: 'TechSolutions RD',
      location: 'Santo Domingo',
      salary: 'RD$45,000 - RD$65,000',
      type: 'Tiempo Completo',
      category: 'Tecnología',
      description: 'Buscamos desarrollador Frontend con experiencia en React para unirse a nuestro equipo de desarrollo.',
      requirements: ['React', 'TypeScript', 'Tailwind CSS'],
      posted: '2 días',
      expires: 'En 12 días',
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      title: 'Analista de Datos',
      company: 'DataCorp Internacional',
      location: 'Santiago',
      salary: 'RD$50,000 - RD$70,000',
      type: 'Tiempo Completo',
      category: 'Análisis',
      description: 'Posición para analista de datos con conocimientos en Python y herramientas de visualización.',
      requirements: ['Python', 'SQL', 'Power BI'],
      posted: '1 día',
      expires: 'En 15 días',
      isNew: true,
      isFeatured: false
    },
    {
      id: 3,
      title: 'Ingeniero de Sistemas',
      company: 'Infraestructura Moderna SA',
      location: 'La Romana',
      salary: 'RD$55,000 - RD$75,000',
      type: 'Tiempo Completo',
      category: 'Ingeniería',
      description: 'Oportunidad para ingeniero de sistemas con experiencia en infraestructura de TI.',
      requirements: ['Linux', 'AWS', 'Docker'],
      posted: '3 días',
      expires: 'En 10 días',
      isNew: false,
      isFeatured: true
    },
    {
      id: 4,
      title: 'Diseñador UX/UI',
      company: 'Creative Digital Agency',
      location: 'Santo Domingo',
      salary: 'RD$40,000 - RD$60,000',
      type: 'Medio Tiempo',
      category: 'Diseño',
      description: 'Buscamos diseñador UX/UI creativo para proyectos de aplicaciones web y móviles.',
      requirements: ['Figma', 'Adobe Creative', 'Prototipado'],
      posted: '5 días',
      expires: 'En 8 días',
      isNew: false,
      isFeatured: false
    },
    {
      id: 5,
      title: 'Oficial de Seguridad Parque Industrial Duarte',
      company: 'MARITIMA DOMINICANA',
      location: 'Santo Domingo Oeste, Santo Domingo',
      salary: 'A discutir en entrevista',
      type: '	Lun – Dom 8:00 am a 5:00 pm Lun – Dom 2:00 pm a 10:00 pm',
      category: 'Seguridad y Salud Ocupacional',
      description: 'Responsable de proteger personas, bienes e instalaciones mediante la vigilancia, control de accesos y respuesta ante situaciones de riesgo, garantizando el cumplimiento de normas de seguridad establecidas',
      requirements: ['Bachiller','Mínimo un año de experiencia en el área','Residir cerca del parque industrial Duarte','Disponibilidad de Horario','Responsable','Proactivo','Capacidad de trabajar en equipo','Buena comunicación','Capacidad de análisis y toma de decisiones',  'Conocimiento de normas de seguridad y primeros auxilios'],
      posted: 'Hoy',
      expires: 'En 10 días',
      isNew: false,
      isFeatured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas las Categorías' },
    { id: 'Tecnología', name: 'Tecnología' },
    { id: 'Análisis', name: 'Análisis de Datos' },
    { id: 'Ingeniería', name: 'Ingeniería' },
    { id: 'Diseño', name: 'Diseño' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-slide-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-azul-oscuro-ipl mb-4">
          Oportunidades Laborales
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre las mejores ofertas de empleo de empresas que confían en el talento IPL
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por título, empresa o ubicación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-12 pr-10 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl text-lg bg-white min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-azul-ipl/20 overflow-hidden group ${
              job.isFeatured ? 'border-amarillo-ipl/30 ring-2 ring-amarillo-ipl/10' : 'border-gray-100'
            }`}
          >
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-azul-oscuro-ipl group-hover:text-azul-ipl transition-colors duration-300">
                          {job.title}
                        </h3>
                        {job.isNew && (
                          <span className="bg-amarillo-ipl text-azul-oscuro-ipl px-3 py-1 rounded-full text-xs font-bold animate-bounce-gentle">
                            NUEVO
                          </span>
                        )}
                        {job.isFeatured && (
                          <span className="bg-azul-ipl text-white px-3 py-1 rounded-full text-xs font-bold">
                            DESTACADO
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-gray-700 mb-3">{job.company}</p>
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-azul-ipl" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <DollarSign className="w-4 h-4 text-azul-ipl" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4 text-azul-ipl" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <BookOpen className="w-4 h-4 text-azul-ipl" />
                      <span className="text-sm">{job.category}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-azul-oscuro-ipl mb-2">Requisitos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="bg-gris-claro-ipl text-azul-oscuro-ipl px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Posted Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Publicado hace {job.posted}</span>
                    <span className="text-rojo-ipl font-medium">{job.expires}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 min-w-[200px]">
                  <button className="bg-azul-ipl text-white px-6 py-3 rounded-2xl font-semibold hover:bg-azul-oscuro-ipl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105">
                    <span>Aplicar Ahora</span>
                  </button>
                  <button className="border-2 border-azul-ipl text-azul-ipl px-6 py-3 rounded-2xl font-semibold hover:bg-azul-ipl hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Ver Detalles</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gris-claro-ipl rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No se encontraron vacantes</h3>
          <p className="text-gray-500">Intenta ajustar tus filtros de búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default JobList;