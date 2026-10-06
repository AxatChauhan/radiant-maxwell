import React, { useState, useEffect } from 'react';
import { Navbar, MainTab } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ResearchPage } from './components/ResearchPage';
import { LeadershipPage } from './components/LeadershipPage';
import { InitiativesPage } from './components/InitiativesPage';
import { EngagementsPage } from './components/EngagementsPage';
import { ResourcesPage } from './components/ResourcesPage';
import { UpdatesPage } from './components/UpdatesPage';
import { ContactPage } from './components/ContactPage';
import { PROFESSOR_INFO } from './data/professorData';
import { Feather, ExternalLink } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('home');
  const [activeSubSection, setActiveSubSection] = useState<string | undefined>(undefined);

  const handleNavigate = (tab: MainTab, subSection?: string) => {
    setActiveTab(tab);
    setActiveSubSection(subSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeSubSection) {
      setTimeout(() => {
        const el = document.getElementById(activeSubSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [activeTab, activeSubSection]);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-900 font-sans relative selection:bg-red-900 selection:text-white pb-20">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-24 min-h-[75vh]">
        {activeTab === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activeTab === 'about' && <AboutPage subSection={activeSubSection} />}
        {activeTab === 'research' && <ResearchPage subSection={activeSubSection} />}
        {activeTab === 'leadership' && <LeadershipPage subSection={activeSubSection} />}
        {activeTab === 'initiatives' && <InitiativesPage subSection={activeSubSection} />}
        {activeTab === 'engagements' && <EngagementsPage subSection={activeSubSection} />}
        {activeTab === 'resources' && <ResourcesPage subSection={activeSubSection} />}
        {activeTab === 'updates' && <UpdatesPage subSection={activeSubSection} />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-8 border-t border-slate-200 space-y-4 text-xs text-slate-500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-red-900 shrink-0" />
            <span className="font-medium text-slate-900">{PROFESSOR_INFO.name}</span>
            <span>• Assistant Professor • {PROFESSOR_INFO.institution}</span>
          </div>

          {/* Social / Research Profile Links */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-600">
            <a href={`https://orcid.org/${PROFESSOR_INFO.researchProfiles.orcid}`} target="_blank" rel="noreferrer" className="hover:text-red-900 underline flex items-center gap-1">
              ORCID <ExternalLink className="w-3 h-3" />
            </a>
            <a href={`https://scholar.google.com/citations?user=${PROFESSOR_INFO.researchProfiles.googleScholar}`} target="_blank" rel="noreferrer" className="hover:text-red-900 underline flex items-center gap-1">
              Google Scholar <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-400">ResearchGate</span>
            <span className="text-slate-400">LinkedIn</span>
            <span className="text-slate-400">YouTube</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
          <span>© {new Date().getFullYear()} {PROFESSOR_INFO.name} | All Rights Reserved</span>
          <span>H. M. Patel Institute of English Training & Research, Vallabh Vidyanagar</span>
        </div>
      </footer>

    </div>
  );
}
