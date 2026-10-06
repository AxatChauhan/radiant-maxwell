import React from 'react';
import { Download, BookOpen, Clock, FileText, Sparkles, ShieldCheck } from 'lucide-react';

interface ResourcesPageProps {
  subSection?: string;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ subSection }) => {
  return (
    <div className="space-y-16 animate-fade-in pt-4">
      
      {/* Title Header */}
      <div className="pb-4 border-b border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Academic Materials</span>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mt-1">Resources & Downloads</h1>
        <p className="text-sm text-slate-600 font-light mt-1">Curriculum resources, teaching materials, research guidance, and official CV download.</p>
      </div>

      {/* 7.5 Downloads & Official CV */}
      <section id="downloads" className="glass-card rounded-3xl p-8 bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-red-900">
            <Download className="w-5 h-5" />
            <h2 className="font-serif text-2xl text-slate-900">Official Downloads</h2>
          </div>
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">Public Version</span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-light">
          Download the official Academic Curriculum Vitae of Dr. Rajnikant S. Dodiya (as of September 2026).
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-900/10 text-red-900 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-medium text-slate-900">Dr. Rajnikant S. Dodiya Academic CV</h4>
              <p className="text-xs text-slate-500 font-mono">PDF Document • 8 Pages • Updated September 2026</p>
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); alert("Academic CV Download initiated: DrRajnikantDodiyaAcademicCV.pdf"); }}
            className="px-5 py-2.5 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium transition-all shadow-xs flex items-center gap-2 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </section>

      {/* 7.1 Academic Resources */}
      <section id="acad-res" className="space-y-4">
        <h2 className="font-serif text-2xl text-slate-900 pb-2 border-b border-slate-200">Academic Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
            <span className="font-mono text-red-900 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">Book Resource</span>
            <h4 className="font-serif text-sm font-medium text-slate-900">UGC NET English Literature (Edited Book)</h4>
            <p className="text-slate-600 font-light">Madhuvan Store, 2024 • ISBN 978-93-90256-27-3</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
            <span className="font-mono text-red-900 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">Guidance Sessions</span>
            <h4 className="font-serif text-sm font-medium text-slate-900">UGC-NET Paper I: Teaching Aptitude</h4>
            <p className="text-slate-600 font-light">Delivered at M.K. Bhavnagar University (Sept 2020)</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
            <span className="font-mono text-red-900 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">NET Coaching</span>
            <h4 className="font-serif text-sm font-medium text-slate-900">Higher Education System Lecture</h4>
            <p className="text-slate-600 font-light">Sardar Patel University Coaching Programme (May 2024)</p>
          </div>
        </div>
      </section>

      {/* 7.2 Teaching Resources */}
      <section id="teach-res" className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
        <h3 className="font-serif text-xl text-slate-900">Teaching Resources</h3>
        <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
          Sample lesson plans, teaching aids, and English language pedagogy guides.
        </p>
        <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[11px] font-mono">Coming Soon</span>
      </section>

      {/* 7.3 Research Resources */}
      <section id="res-res" className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
        <h3 className="font-serif text-xl text-slate-900">Research Resources</h3>
        <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
          Research methodology guides, data analysis tools, and academic writing templates.
        </p>
        <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[11px] font-mono">Coming Soon</span>
      </section>

      {/* 7.4 AI & English Language Education */}
      <section id="ai-ele" className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
        <h3 className="font-serif text-xl text-slate-900">AI & English Language Education</h3>
        <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
          AI-integrated techno-pedagogy guides, prompt engineering for language learning, and CAIELE resource kits.
        </p>
        <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[11px] font-mono">Coming Soon</span>
      </section>

    </div>
  );
};
