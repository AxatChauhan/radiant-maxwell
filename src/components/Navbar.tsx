import React, { useState } from 'react';
import { Feather, ChevronDown, Menu, X, Download } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/professorData';

export type MainTab = 'home' | 'about' | 'research' | 'leadership' | 'initiatives' | 'engagements' | 'resources' | 'updates' | 'contact';

interface NavbarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab, subSection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuStructure = [
    { id: 'home', label: 'Home' },
    {
      id: 'about',
      label: 'About',
      subTabs: [
        { id: 'profile', label: 'Profile' },
        { id: 'qualifications', label: 'Qualifications & Eligibility' },
        { id: 'experience', label: 'Professional Experience' },
        { id: 'expertise', label: 'Areas of Expertise' },
        { id: 'philosophy', label: 'Vision & Academic Philosophy' },
        { id: 'memberships', label: 'Memberships' },
      ]
    },
    {
      id: 'research',
      label: 'Research',
      subTabs: [
        { id: 'interests', label: 'Research Interests' },
        { id: 'doctoral', label: 'Doctoral Research & Projects' },
        { id: 'publications', label: 'Publications (19)' },
        { id: 'books', label: 'Books (10)' },
        { id: 'profiles', label: 'Research Profiles & Metrics' },
      ]
    },
    {
      id: 'leadership',
      label: 'Academic Leadership',
      subTabs: [
        { id: 'iqac', label: 'IQAC & NAAC' },
        { id: 'ncte', label: 'NCTE / Teacher Education' },
        { id: 'placement', label: 'Placement & Career Counselling' },
        { id: 'gsirf', label: 'GSIRF' },
        { id: 'rdc-lead', label: 'RDC – Research Cell' },
        { id: 'induction', label: 'Student Induction' },
        { id: 'editorial', label: 'Editorial Roles' },
        { id: 'curriculum', label: 'Curriculum Development' },
        { id: 'other-resp', label: 'Other Responsibilities' },
      ]
    },
    {
      id: 'initiatives',
      label: 'Initiatives',
      subTabs: [
        { id: 'elef', label: 'ELEF Forum' },
        { id: 'caiele', label: 'CAIELE (AI in ELE)' },
        { id: 'english-club', label: 'English Club' },
        { id: 'rdc-init', label: 'RDC Initiatives' },
      ]
    },
    {
      id: 'engagements',
      label: 'Academic Engagements',
      subTabs: [
        { id: 'talks', label: 'Invited Talks & Lectures (22)' },
        { id: 'conferences', label: 'Conferences & Seminars (12)' },
        { id: 'session-chair', label: 'Session Chair (9)' },
        { id: 'fdp', label: 'Faculty Development & Training' },
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      subTabs: [
        { id: 'acad-res', label: 'Academic Resources' },
        { id: 'teach-res', label: 'Teaching Resources' },
        { id: 'res-res', label: 'Research Resources' },
        { id: 'ai-ele', label: 'AI & English Language Education' },
        { id: 'downloads', label: 'Downloads & CV' },
      ]
    },
    {
      id: 'updates',
      label: 'Updates',
      subTabs: [
        { id: 'news', label: 'Latest News' },
        { id: 'events', label: 'Events' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'announcements', label: 'Announcements' },
      ]
    },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string, subId?: string) => {
    setActiveTab(tabId as MainTab, subId);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/30 flex items-center justify-center text-red-900 group-hover:bg-red-900 group-hover:text-white transition-all">
            <Feather className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg md:text-xl font-normal tracking-tight text-slate-900">
                {PROFESSOR_INFO.name}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-wide font-light hidden sm:block">
              {PROFESSOR_INFO.institution}
            </p>
          </div>
        </div>

        {/* Desktop Top Menu */}
        <nav className="hidden xl:flex items-center gap-1">
          {menuStructure.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.subTabs && setOpenDropdown(item.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${
                  activeTab === item.id
                    ? 'bg-red-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-red-900 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {item.subTabs && (
                  <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.subTabs && openDropdown === item.id && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-fade-in">
                  {item.subTabs.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(item.id, sub.id)}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-red-900/10 hover:text-red-900 transition-colors flex items-center justify-between"
                    >
                      <span>{sub.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('resources', 'downloads')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-900 hover:text-white text-slate-700 border border-slate-300 text-xs font-medium transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV Download</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 max-h-[80vh] overflow-y-auto space-y-3 shadow-xl">
          {menuStructure.map((item) => (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left font-serif text-sm font-semibold py-1.5 px-2 rounded-lg flex items-center justify-between ${
                  activeTab === item.id ? 'bg-red-900 text-white' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
              </button>

              {item.subTabs && (
                <div className="pl-4 space-y-1 border-l-2 border-slate-200 ml-2">
                  {item.subTabs.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(item.id, sub.id)}
                      className="w-full text-left py-1 text-xs text-slate-600 hover:text-red-900 block"
                    >
                      • {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
