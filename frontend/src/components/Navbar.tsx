import { Link, useLocation } from "react-router-dom";
import { Briefcase, Building2, GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la URL




    const navigationItems = [
    { id: 'jobs' as const, label: 'Oportunidades Laborales', icon: Briefcase },
    { id: 'companies' as const, label: 'Para Empresas', icon: Building2 },
    { id: 'students' as const, label: 'Para Estudiantes', icon: GraduationCap },
  ];


    return (
   <nav className="hidden lg:flex space-x-1">
          

   <Link to="/" className="mr-5 hover:text-white flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300">
    
             <Briefcase className="w-4 h-4 text-azul-ipl" />
             Oportunidades Laborales
              
    </Link>
   <Link to="/companies" className="mr-5 hover:text-white flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300">
    
             <Building2 className="w-4 h-4 text-azul-ipl" />
             Para Empresas
              
    </Link>

          
          </nav>
    )
  }
  
  export default Navbar