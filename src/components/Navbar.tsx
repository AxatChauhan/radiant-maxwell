import React, { useState } from 'react';
import { Feather, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/professorData';

export type MainTab = 'home' | 'about' | 'research' | 'leadership' | 'initiatives' | 'engagements' | 'resources' | 'updates' | 'contact';

interface NavbarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab, subSection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

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

  const toggleMobileAccordion = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileExpandedSection(mobileExpandedSection === id ? null : id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group py-1"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-900/10 border border-red-900/30 flex items-center justify-center text-red-900 group-hover:bg-red-900 group-hover:text-white transition-all shrink-0">
            <Feather className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-tight text-slate-900 truncate">
                {PROFESSOR_INFO.name}
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 tracking-wide font-light hidden sm:block truncate">
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

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-3 max-h-[82vh] overflow-y-auto space-y-1.5 shadow-2xl animate-fade-in">
          {menuStructure.map((item) => {
            const isExpanded = mobileExpandedSection === item.id;
            return (
              <div key={item.id} className="rounded-xl overflow-hidden border border-slate-100">
                <div 
                  className={`w-full flex items-center justify-between px-3.5 py-3 min-h-[44px] cursor-pointer transition-colors ${
                    activeTab === item.id ? 'bg-red-900 text-white' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="font-serif text-sm font-semibold">{item.label}</span>
                  {item.subTabs && (
                    <button
                      onClick={(e) => toggleMobileAccordion(item.id, e)}
                      className="p-1 text-inherit hover:opacity-80 shrink-0"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {item.subTabs && isExpanded && (
                  <div className="bg-slate-50/80 px-4 py-2 space-y-1 border-t border-slate-200/60">
                    {item.subTabs.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(item.id, sub.id)}
                        className="w-full text-left py-2 px-2 text-xs text-slate-700 hover:text-red-900 hover:bg-white rounded-lg transition-colors flex items-center justify-between min-h-[38px]"
                      >
                        <span>{sub.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};
