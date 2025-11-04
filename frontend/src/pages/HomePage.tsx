import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import JobList from '../components/JobList';
import CompanyForm from '../components/CompanyForm';
import StudentSection from '../components/StudentSection';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

function HomePage() {
  const [activeSection, setActiveSection] = useState<'jobs' | 'companies' | 'students'>('jobs');

  return (
    <div className="min-h-screen bg-gris-claro-ipl">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Stats />
      
      <main className="container mx-auto px-4 py-12">
        <div className="animate-fade-in">
          {activeSection === 'jobs' && <JobList />}
          {activeSection === 'companies' && <CompanyForm />}
          {activeSection === 'students' && <StudentSection />}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default HomePage;