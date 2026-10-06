import React from 'react';
import { PROFESSOR_INFO, PUBLICATIONS, BOOKS, INVITED_TALKS, CONFERENCE_PAPERS, LATEST_UPDATES, EXPERTISE_AREAS } from '../data/professorData';
import { ArrowRight, BookOpen, Award, GraduationCap, CheckCircle, ExternalLink, Calendar, Layers, ShieldCheck, Mail, Sparkles, Feather } from 'lucide-react';
import { MainTab } from './Navbar';

interface HomePageProps {
  onNavigate: (tab: MainTab, subId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const latestPapers = PUBLICATIONS.slice(0, 3);
  const latestEditedBook = BOOKS.find(b => b.type === 'edited');
  const homeUpdates = LATEST_UPDATES.slice(0, 3);

  return (
    <div className="space-y-10 sm:space-y-16 animate-fade-in pt-1 sm:pt-4">
      
      {/* Hero Section */}
      <section className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-white border border-slate-200/90 shadow-xs relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/10 border border-red-900/20 text-red-900 text-xs font-mono font-semibold max-w-full truncate">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-red-900" />
              <span className="truncate">{PROFESSOR_INFO.institution}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-900 font-normal leading-[1.15] tracking-tight">
              {PROFESSOR_INFO.name}
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base font-serif italic text-red-900 font-medium leading-relaxed">
              {PROFESSOR_INFO.title} • {PROFESSOR_INFO.location}
            </p>

            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-semibold tracking-wide leading-relaxed">
              {PROFESSOR_INFO.positioningLine}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {PROFESSOR_INFO.shortBio}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 border border-slate-300 hover:bg-slate-200 text-xs font-medium text-slate-800 transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-red-900" />
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professor Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              <img
                src={PROFESSOR_INFO.photoUrl}
                alt={PROFESSOR_INFO.name}
                className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h2 className="font-serif text-lg sm:text-xl font-normal text-white">{PROFESSOR_INFO.name}</h2>
                <p className="text-[11px] sm:text-xs text-slate-200 font-light truncate">{PROFESSOR_INFO.title}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Academic Profile at a Glance (Counter Strip) */}
      <section className="space-y-3 sm:space-y-4">
        <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-serif text-xl sm:text-2xl text-slate-900">Academic Profile at a Glance</h2>
          <span className="text-[10px] sm:text-xs font-mono text-slate-500">Official Data from Academic CV</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          {PROFESSOR_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-center shadow-2xs hover:border-red-900/30 transition-all">
              <span className="font-serif text-lg sm:text-xl font-bold text-red-900 block">{stat.value}</span>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-mono block mt-0.5 leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Research & Academic Interests */}
      <section className="space-y-4 sm:space-y-6">
        <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Core Specialisations</span>
            <h2 className="font-serif text-xl sm:text-2xl text-slate-900 mt-0.5">Research & Academic Interests</h2>
          </div>
          <button onClick={() => onNavigate('research', 'interests')} className="text-xs text-red-900 font-medium hover:underline flex items-center gap-1 shrink-0">
            <span>All Areas</span> <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {EXPERTISE_AREAS.slice(0, 8).map((area, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 hover:border-red-900/40 transition-all shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-red-900 mt-1.5 shrink-0"></span>
              <span className="text-xs font-medium text-slate-800 leading-snug">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Leadership Strip */}
      <section className="p-5 sm:p-6 rounded-2xl bg-red-900/5 border border-red-900/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-mono uppercase font-semibold text-red-900">Institutional Quality & Governance</span>
          <h3 className="font-serif text-lg sm:text-xl text-slate-900 mt-0.5">Academic Leadership Responsibilities</h3>
          <p className="text-xs text-slate-600 font-light mt-1 leading-relaxed">IQAC & NAAC | NCTE PAR | GSIRF | RDC | Placement | Career Counselling</p>
        </div>
        <button
          onClick={() => onNavigate('leadership')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium shrink-0 transition-all shadow-xs flex items-center justify-center gap-1.5 min-h-[44px]"
        >
          <span>View Academic Leadership</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Featured Initiatives (3 Cards) */}
      <section className="space-y-4 sm:space-y-6">
        <div className="pb-2 border-b border-slate-200">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Institutional Programs</span>
          <h2 className="font-serif text-xl sm:text-2xl text-slate-900 mt-0.5">Featured Academic Initiatives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">Convener</span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-slate-900 mt-2">ELEF</h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">English Language Education Forum</p>
              <p className="text-xs text-slate-600 font-light mt-2.5 leading-relaxed">
                Academic and research platform bringing together English language educators, scholars, and researchers.
              </p>
            </div>
            <button onClick={() => onNavigate('initiatives', 'elef')} className="mt-4 text-xs font-medium text-red-900 hover:underline flex items-center gap-1 pt-2">
              <span>Read More</span> <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">Coordinator</span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-slate-900 mt-2">CAIELE</h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">Centre for Artificial Intelligence in ELE</p>
              <p className="text-xs text-slate-600 font-light mt-2.5 leading-relaxed">
                Academic leadership for AI-enabled English language education, techno-pedagogy, and digital research.
              </p>
            </div>
            <button onClick={() => onNavigate('initiatives', 'caiele')} className="mt-4 text-xs font-medium text-red-900 hover:underline flex items-center gap-1 pt-2">
              <span>Read More</span> <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">Coordinator</span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-slate-900 mt-2">RDC</h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">Research & Development Cell</p>
              <p className="text-xs text-slate-600 font-light mt-2.5 leading-relaxed">
                Research promotion, capacity building, and developing institutional research culture at HMPIETR.
              </p>
            </div>
            <button onClick={() => onNavigate('initiatives', 'rdc-init')} className="mt-4 text-xs font-medium text-red-900 hover:underline flex items-center gap-1 pt-2">
              <span>Read More</span> <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="space-y-4 sm:space-y-6">
        <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Scholarship</span>
            <h2 className="font-serif text-xl sm:text-2xl text-slate-900 mt-0.5">Recent Publications & Books</h2>
          </div>
          <button onClick={() => onNavigate('research', 'publications')} className="text-xs text-red-900 font-medium hover:underline flex items-center gap-1 shrink-0">
            <span>View All (19)</span> <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase font-semibold text-slate-500">Latest Research Papers (2026)</h3>
            {latestPapers.map((paper) => (
              <div key={paper.no} className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-red-900/30 transition-all text-xs">
                <span className="text-[10px] font-mono text-red-900 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">{paper.year} • {paper.theme}</span>
                <h4 className="font-serif text-sm font-medium text-slate-900 mt-1.5 leading-snug">{paper.title}</h4>
                <p className="text-[11px] text-slate-500 italic mt-1">{paper.journal} ({paper.issn})</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase font-semibold text-slate-500">Latest Edited Book</h3>
            {latestEditedBook && (
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200 flex flex-col justify-between h-[calc(100%-1.75rem)]">
                <div>
                  <span className="text-xs font-mono text-amber-900 font-bold">Edited Book • {latestEditedBook.year}</span>
                  <h4 className="font-serif text-base sm:text-lg font-medium text-slate-900 mt-2 leading-snug">{latestEditedBook.title}</h4>
                  <p className="text-xs text-slate-600 font-light mt-2">Publisher: {latestEditedBook.publisher}</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">ISBN: {latestEditedBook.isbn}</p>
                </div>

                <button onClick={() => onNavigate('research', 'books')} className="mt-4 text-xs font-medium text-red-900 hover:underline flex items-center gap-1 pt-2">
                  <span>View All Books</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="space-y-4">
        <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-serif text-xl sm:text-2xl text-slate-900">Latest Updates & Academic News</h2>
          <button onClick={() => onNavigate('updates')} className="text-xs text-red-900 font-medium hover:underline flex items-center gap-1 shrink-0">
            <span>All Updates</span> <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {homeUpdates.map((update, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-red-900 font-semibold">{update.date}</span>
                <h4 className="font-serif text-sm font-medium text-slate-900 mt-1">{update.title}</h4>
                {update.details && <p className="text-[11px] text-slate-500 mt-1 font-light leading-relaxed">{update.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
