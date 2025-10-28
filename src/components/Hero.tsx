import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowRight, Users, Building2, Briefcase } from 'lucide-react';

const Hero = () => {
  const [parametro, setParametro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/parametro/1');
        setParametro(response.data);
        console.log('Datos recibidos:', response.data);
      } catch (error) {
        console.error('Error inesperado:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-azul-ipl via-azul-oscuro-ipl to-azul-ipl py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amarillo-ipl rounded-full blur-xl animate-bounce-gentle"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-lg animate-bounce-gentle"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amarillo-ipl rounded-full blur-2xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Conectamos
            <span className="block text-amarillo-ipl">Talento con Oportunidades</span>
          </h1>

          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Plataforma oficial del Instituto Politécnico Loyola para vincular a nuestros
            estudiantes y egresados con las mejores empresas del país
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-amarillo-ipl text-azul-oscuro-ipl px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group">
              <span>Explorar Oportunidades</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-azul-oscuro-ipl transition-all duration-300">
              Contactos
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Estudiantes */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-amarillo-ipl rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-azul-oscuro-ipl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {parametro ? parametro.estudiantes_beneficiados : 0}+
              </h3>
              <p className="text-white/80">Estudiantes y Egresados</p>
            </div>

            {/* Empresas */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-amarillo-ipl rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 text-azul-oscuro-ipl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{parametro ? parametro.estudiantes_beneficiados : 0}+</h3>
              <p className="text-white/80">Empresas Aliadas</p>
            </div>

            {/* Inserción */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-amarillo-ipl rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-azul-oscuro-ipl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">89%</h3>
              <p className="text-white/80">Tasa de Inserción Laboral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
