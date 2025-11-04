import React, { useState } from 'react';
import { Building2, MapPin, DollarSign, Calendar, FileText, Users, Send, CheckCircle } from 'lucide-react';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    contactPhone: '',
    jobTitle: '',
    jobLocation: '',
    jobType: 'full-time',
    salaryMin: '',
    salaryMax: '',
    category: '',
    description: '',
    requirements: '',
    benefits: '',
    duration: '30'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío del formulario
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactEmail: '',
        contactPhone: '',
        jobTitle: '',
        jobLocation: '',
        jobType: 'full-time',
        salaryMin: '',
        salaryMax: '',
        category: '',
        description: '',
        companyDescription: '',
        requirements: '',
        benefits: '',
        duration: '30'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in text-center py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-azul-oscuro-ipl mb-4">¡Vacante Enviada!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Hemos recibido su solicitud de publicación. Nuestro equipo la revisará y la publicará en un plazo de 24 horas.
          </p>
          <p className="text-sm text-gray-500">
            Le notificaremos por correo electrónico cuando la vacante esté activa en el portal.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-azul-oscuro-ipl mb-4">
          Para Empresas
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Publique su vacante y conecte con el mejor talento del Instituto Politécnico Loyola
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-azul-ipl rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-azul-oscuro-ipl mb-2">Talento Calificado</h3>
          <p className="text-gray-600">Acceso directo a estudiantes y egresados con formación técnica especializada</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-azul-oscuro-ipl rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-azul-oscuro-ipl mb-2">Publicación Gratuita</h3>
          <p className="text-gray-600">Para empresas que buscan talentos de nuestra institución</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-amarillo-ipl rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-azul-oscuro-ipl" />
          </div>
          <h3 className="text-xl font-bold text-azul-oscuro-ipl mb-2">Proceso Ágil</h3>
          <p className="text-gray-600">Publicación en menos de 72 horas tras revisión del equipo IPL</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold text-azul-oscuro-ipl mb-6 flex items-center">
              <Building2 className="w-6 h-6 mr-3 text-azul-ipl" />
              Información de la Empresa
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Nombre*
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="Nombre de su empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Email de Contacto *
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="contacto@empresa.com"
                />
              </div>
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                 Descripción
                </label>
                 <textarea
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200 resize-none"
                placeholder="Describa las responsabilidades y objetivos del puesto..."
              />
              </div>
              <div className="lg:col-span-1">
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Teléfono de Contacto
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="(809) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div>
            <h3 className="text-2xl font-bold text-azul-oscuro-ipl mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-azul-ipl" />
              Información de la Vacante
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Título del Puesto *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="Ej: Desarrollador Frontend"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Ubicación *
                </label>
                <input
                  type="text"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="Ej: Santo Domingo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Tipo de Empleo *
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                >
                  <option value="full-time">Tiempo Completo</option>
                  <option value="part-time">Medio Tiempo</option>
                  <option value="contract">Por Contrato</option>
                  <option value="internship">Pasantía</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Categoría *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Ingeniería">Ingeniería</option>
                  <option value="Análisis">Análisis de Datos</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Administración">Administración</option>
                </select>
              </div>
            </div>
          </div>

          {/* Salary Information */}
          <div>
            <h3 className="text-lg font-semibold text-azul-oscuro-ipl mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-azul-ipl" />
              Rango Salarial (Opcional)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Salario Mínimo (RD$)
                </label>
                <input
                  type="number"
                  name="salaryMin"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="35000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                  Salario Máximo (RD$)
                </label>
                <input
                  type="number"
                  name="salaryMax"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
                  placeholder="55000"
                />
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                Descripción del Puesto *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200 resize-none"
                placeholder="Describa las responsabilidades y objetivos del puesto..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                Requisitos y Competencias *
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200 resize-none"
                placeholder="Experiencia, habilidades técnicas, conocimientos específicos..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                Beneficios Ofrecidos
              </label>
              <textarea
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200 resize-none"
                placeholder="Seguro médico, bonificaciones, capacitaciones..."
              />
            </div>
{/*             <div>
              <label className="block text-sm font-semibold text-azul-oscuro-ipl mb-2">
                Duración de la Publicación
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-azul-ipl focus:border-azul-ipl transition-all duration-200"
              >
                <option value="15">15 días</option>
                <option value="30">30 días</option>
                <option value="45">45 días</option>
                <option value="60">60 días</option>
              </select>
            </div> */}
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="bg-gradient-to-r from-azul-ipl to-azul-oscuro-ipl text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 mx-auto group hover:scale-105"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              <span>Enviar Solicitud</span>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Su vacante será revisada y publicada en un plazo de 72 horas
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;