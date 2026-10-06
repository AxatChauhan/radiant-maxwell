import React, { useState } from 'react';
import { PROFESSOR_INFO, PUBLICATIONS, BOOKS, EXPERTISE_AREAS, Publication, Book } from '../data/professorData';
import { BookOpen, ExternalLink, Filter, Search, Award, FileText, BarChart2, CheckCircle } from 'lucide-react';

interface ResearchPageProps {
  subSection?: string;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ subSection }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [publicationSearch, setPublicationSearch] = useState<string>('');

  const themes = ['All', ...Array.from(new Set(PUBLICATIONS.map(p => p.theme)))];

  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesTheme = selectedTheme === 'All' || pub.theme === selectedTheme;
    const matchesSearch = pub.title.toLowerCase().includes(publicationSearch.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(publicationSearch.toLowerCase());
    return matchesTheme && matchesSearch;
  });

  const authoredBooks = BOOKS.filter(b => b.type === 'authored');
  const editedBooks = BOOKS.filter(b => b.type === 'edited');
  const bookChapters = BOOKS.filter(b => b.type === 'chapter');

  return (
    <div className="space-y-16 animate-fade-in pt-4">
      
      {/* Title Header */}
      <div className="pb-4 border-b border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Scholarly Contributions</span>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mt-1">Research & Publications</h1>
        <p className="text-sm text-slate-600 font-light mt-1">Peer-reviewed publications, authored & edited books, doctoral research, and citation metrics.</p>
      </div>

      {/* 3.1 Research Interests */}
      <section id="interests" className="space-y-4">
        <h2 className="font-serif text-2xl text-slate-900 pb-2 border-b border-slate-200">Research Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EXPERTISE_AREAS.map((interest, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-900 shrink-0"></span>
              <span>{interest}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.2 Doctoral Research & Projects */}
      <section id="doctoral" className="space-y-6">
        <h2 className="font-serif text-2xl text-slate-900 pb-2 border-b border-slate-200">Doctoral Research & Projects</h2>
        
        {/* Doctoral Thesis Box */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <span className="text-xs font-mono text-red-900 font-bold bg-red-50 px-2.5 py-1 rounded border border-red-200">Ph.D. in Education (2018) • Sardar Patel University</span>
          <h3 className="font-serif text-xl text-slate-900 leading-snug">
            "A Study of the Educational Thoughts as reflected in APJ Abdul Kalam’s Writings"
          </h3>
          <div className="text-xs text-slate-600 space-y-1 font-light pt-1">
            <p><strong className="font-medium text-slate-900">Research Guide:</strong> {PROFESSOR_INFO.phdDetails.guide}</p>
            <p><strong className="font-medium text-slate-900">Registration Details:</strong> Registration No. {PROFESSOR_INFO.phdDetails.regNo}</p>
            <p><strong className="font-medium text-slate-900">Result Declared:</strong> {PROFESSOR_INFO.phdDetails.resultDeclared}</p>
          </div>
        </div>

        {/* Funded Projects (Coming Soon placeholder as per brief) */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 italic">
          Research Projects & Grants section: Content to be added later.
        </div>
      </section>

      {/* 3.3 Publications (19 Research Papers) */}
      <section id="publications" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono uppercase text-red-900 font-semibold">19 Peer-Reviewed Papers</span>
            <h2 className="font-serif text-2xl text-slate-900">Research Publications</h2>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search publications..."
              value={publicationSearch}
              onChange={(e) => setPublicationSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-900"
            />
          </div>
        </div>

        {/* Theme Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {themes.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTheme(t)}
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedTheme === t
                  ? 'bg-red-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Publications Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs text-slate-700 min-w-[550px]">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 font-mono text-[11px] uppercase">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4 w-16">Year</th>
                <th className="py-3 px-4">Title & Journal Details</th>
                <th className="py-3 px-4 w-48">Theme</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPublications.map((pub) => (
                <tr key={pub.no} className="hover:bg-slate-50/80">
                  <td className="py-3 px-4 font-mono font-bold text-slate-400">{pub.no}</td>
                  <td className="py-3 px-4 font-mono font-bold text-red-900">{pub.year}</td>
                  <td className="py-3 px-4 space-y-0.5">
                    <p className="font-serif text-sm font-medium text-slate-900 leading-snug">{pub.title}</p>
                    <p className="text-[11px] text-slate-500 italic">{pub.journal}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] border border-slate-200 block truncate">
                      {pub.theme}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3.4 Books (Authored & Edited) */}
      <section id="books" className="space-y-8">
        <h2 className="font-serif text-2xl text-slate-900 pb-2 border-b border-slate-200">Books & Book Chapters</h2>

        {/* Authored Books */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono font-semibold uppercase text-slate-700">Authored Books (6)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authoredBooks.map((book, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                <span className="font-mono text-red-900 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">{book.year}</span>
                <h4 className="font-serif text-base font-medium text-slate-900">{book.title}</h4>
                <p className="text-slate-600 font-light">Publisher: {book.publisher}</p>
                <p className="text-slate-400 font-mono text-[11px]">ISBN: {book.isbn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Edited Books */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono font-semibold uppercase text-slate-700">Edited Books (4)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {editedBooks.map((book, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5 shadow-2xs">
                <span className="font-mono text-amber-900 font-bold bg-amber-100 px-2 py-0.5 rounded border border-amber-300">{book.year} • Edited</span>
                <h4 className="font-serif text-base font-medium text-slate-900">{book.title}</h4>
                <p className="text-slate-600 font-light">Publisher: {book.publisher}</p>
                <p className="text-slate-500 font-mono text-[11px]">ISBN: {book.isbn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter in Edited Book */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-semibold uppercase text-slate-700">Book Chapter</h3>
          {bookChapters.map((ch, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1 shadow-2xs">
              <span className="font-mono text-red-900 font-bold">{ch.year}</span>
              <p className="font-serif text-sm font-medium text-slate-900">{ch.title}</p>
              <p className="text-slate-600 italic">{ch.details}</p>
              <p className="text-slate-500">{ch.publisher} • ISBN {ch.isbn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3.5 Research Profiles & Metrics */}
      <section id="profiles" className="space-y-6">
        <div className="pb-2 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="font-serif text-2xl text-slate-900">Research Profiles & Citation Metrics</h2>
          <span className="text-xs font-mono text-slate-500">Verified Domain: {PROFESSOR_INFO.researchProfiles.verifiedDomain}</span>
        </div>

        {/* Platform Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <a href={`https://orcid.org/${PROFESSOR_INFO.researchProfiles.orcid}`} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-red-900 text-center text-xs text-slate-800 transition-all shadow-2xs">
            <span className="font-bold text-slate-900 block">ORCID</span>
            <span className="text-[10px] font-mono text-slate-500 truncate block mt-0.5">{PROFESSOR_INFO.researchProfiles.orcid}</span>
          </a>

          <a href={`https://scholar.google.com/citations?user=${PROFESSOR_INFO.researchProfiles.googleScholar}`} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-red-900 text-center text-xs text-slate-800 transition-all shadow-2xs">
            <span className="font-bold text-slate-900 block">Google Scholar</span>
            <span className="text-[10px] font-mono text-slate-500 truncate block mt-0.5">X92BI1AAAAAJ</span>
          </a>

          <div className="p-3 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-800 shadow-2xs">
            <span className="font-bold text-slate-900 block">VIDWAN</span>
            <span className="text-[10px] font-mono text-slate-500 block mt-0.5">ID: 655426</span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-800 shadow-2xs">
            <span className="font-bold text-slate-900 block">Researcher ID</span>
            <span className="text-[10px] font-mono text-slate-500 block mt-0.5">PUF-7257-2026</span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-800 shadow-2xs">
            <span className="font-bold text-slate-900 block">ResearchGate</span>
            <span className="text-[10px] font-mono text-slate-500 block mt-0.5">Score: 74.2</span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-800 shadow-2xs">
            <span className="font-bold text-slate-900 block">LinkedIn</span>
            <span className="text-[10px] font-mono text-slate-500 block mt-0.5">Dr. Rajnikant Dodiya</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="font-serif text-3xl font-bold text-red-900 block">{PROFESSOR_INFO.researchProfiles.scholarCitations}</span>
            <span className="text-xs text-slate-600 font-mono mt-0.5 block">Google Scholar Citations</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="font-serif text-3xl font-bold text-slate-900 block">{PROFESSOR_INFO.researchProfiles.scholarCitationsSince2021}</span>
            <span className="text-xs text-slate-600 font-mono mt-0.5 block">Citations Since 2021</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="font-serif text-3xl font-bold text-[#b45309] block">{PROFESSOR_INFO.researchProfiles.hIndex}</span>
            <span className="text-xs text-slate-600 font-mono mt-0.5 block">h-index</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="font-serif text-3xl font-bold text-red-900 block">{PROFESSOR_INFO.researchProfiles.rgScore}</span>
            <span className="text-xs text-slate-600 font-mono mt-0.5 block">ResearchGate Score</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 font-light italic">
          * Metrics shown as of {PROFESSOR_INFO.researchProfiles.metricsAsOf}; citation and platform metrics are dynamic and may change over time.
        </p>
      </section>

    </div>
  );
};
