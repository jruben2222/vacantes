import { useState, useEffect } from "react";
import { GraduationCap, FileText, Users, Star, Download, BookOpen, Briefcase, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StudentPage = () => {
  // 🖼️ Slider de imágenes
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);

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
    }
  ];

  const stats = [
    { label: "Egresados Empleados", value: "89%", icon: Briefcase },
    { label: "Tiempo Promedio de Inserción", value: "3.2", unit: "meses", icon: TrendingUp },
    { label: "Empresas Aliadas", value: "150+", icon: Users },
    { label: "Salario Promedio Inicial", value: "52K", unit: "RD$", icon: Star }
  ];

  return (
    <>
      <Header />

      {/* 🖼️ Slider Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-b-3xl shadow-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Indicadores inferiores */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-amarillo-ipl" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* 🔹 Contenido principal */}
      <div className="animate-slide-up mt-10">
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
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
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

        {/* Tips y Recursos (resto igual) */}
        {/* ... aquí sigue tu mismo código original */}
      </div>

      <Footer />
    </>
  );
};

export default StudentPage;
