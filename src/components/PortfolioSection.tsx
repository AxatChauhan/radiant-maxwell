import React, { useState } from 'react';
import { BookOpen, GraduationCap, Award, ExternalLink, Copy, Check, FileText, Calendar, Mail, Quote, Sparkles } from 'lucide-react';
import { PROFESSOR_INFO, MONOGRAPHS, COURSES, MARK_TWAIN_QUOTES, Monograph } from '../data/professorData';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (mono: Monograph) => {
    navigator.clipboard.writeText(mono.citation);
    setCopiedId(mono.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="space-y-16">
      {/* Bio Banner with Teacher Photo */}
      <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden bg-white border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Teacher Photo */}
          <div className="lg:col-span-4 relative group">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
              <img 
                src={PROFESSOR_INFO.photoUrl} 
                alt={PROFESSOR_INFO.name}
                className="w-full h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic">
                "{PROFESSOR_INFO.name}, Columbia University Department of Humanities"
              </div>
            </div>
            
            {/* Crest badge overlay */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-red-900 border-2 border-white shadow-lg flex items-center justify-center text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/10 border border-red-900/20 text-red-900 text-xs font-mono font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>Regius Chair of Comparative Literature & American Realism</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-slate-900 font-normal tracking-tight">
              {PROFESSOR_INFO.name}
            </h1>
            <p className="text-sm md:text-base font-serif italic text-red-900 font-medium">
              {PROFESSOR_INFO.title} • {PROFESSOR_INFO.institution}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              {PROFESSOR_INFO.bio}
            </p>

            {/* Twain Inspiration Banner */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-slate-700 flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-900 block mb-0.5">Mark Twain Intellectual Inspiration:</span>
                <p className="italic text-slate-600">{PROFESSOR_INFO.twainInspirationNote}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <GraduationCap className="w-4 h-4 text-red-900" />
                <span>{PROFESSOR_INFO.degrees}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <Mail className="w-4 h-4 text-red-900" />
                <span>{PROFESSOR_INFO.email}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium shadow-md transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule Academic Advising / Thesis Office Hours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center bg-white">
          <span className="font-serif text-4xl font-bold text-red-900 block">
            {PROFESSOR_INFO.stats.booksPublished}
          </span>
          <span className="text-xs text-slate-500 uppercase font-mono tracking-wider mt-1 block">
            Published Monographs
          </span>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center bg-white">
          <span className="font-serif text-4xl font-bold text-slate-900 block">
            {PROFESSOR_INFO.stats.phdStudentsGraduated}+
          </span>
          <span className="text-xs text-slate-500 uppercase font-mono tracking-wider mt-1 block">
            PhDs Advised
          </span>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center bg-white">
          <span className="font-serif text-4xl font-bold text-slate-900 block">
            {PROFESSOR_INFO.stats.studyMaterialsSold}+
          </span>
          <span className="text-xs text-slate-500 uppercase font-mono tracking-wider mt-1 block">
            Vault Downloads
          </span>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center bg-white">
          <span className="font-serif text-4xl font-bold text-red-900 block">
            {PROFESSOR_INFO.stats.yearsTenure}
          </span>
          <span className="text-xs text-slate-500 uppercase font-mono tracking-wider mt-1 block">
            Years University Tenure
          </span>
        </div>
      </div>

      {/* Mark Twain Quotes Carousel / Grid */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">
            Literary Philosophy & Epigraphs
          </span>
          <h2 className="font-serif text-3xl text-slate-900 mt-1">
            Featured Mark Twain Epigraphs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MARK_TWAIN_QUOTES.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-amber-800/30 mb-3" />
                <p className="font-serif text-xl italic text-slate-800 leading-snug">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-200/60 text-xs font-mono text-amber-900 flex items-center justify-between">
                <span>— Mark Twain</span>
                <span className="text-slate-500 font-sans text-[11px]">{t.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Monographs Section */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">
            Peer-Reviewed University Press Books & Articles
          </span>
          <h2 className="font-serif text-3xl text-slate-900 mt-1">
            Major Academic Publications & Monographs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MONOGRAPHS.map((mono) => (
            <div 
              key={mono.id} 
              className="glass-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-slate-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                  <span>{mono.publisher}</span>
                  <span className="text-red-900 font-bold">{mono.year}</span>
                </div>

                <h3 className="font-serif text-lg font-normal text-slate-900 leading-snug">
                  {mono.title}
                </h3>

                <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                  {mono.description}
                </p>

                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
                  <span className="text-slate-900 block font-sans font-medium text-[10px] uppercase mb-0.5">ISBN / Identifier:</span>
                  {mono.isbn}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleCopyCitation(mono)}
                  className="px-3 py-1.5 rounded bg-slate-100 border border-slate-300 hover:bg-slate-200 text-xs text-slate-800 flex items-center gap-1.5 transition-all"
                >
                  {copiedId === mono.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" /> Copied Citation
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy MLA Citation
                    </>
                  )}
                </button>

                <a
                  href={mono.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-red-900 hover:text-red-700 font-medium flex items-center gap-1"
                >
                  Publisher <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Taught Section */}
      <div className="space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">
            Academic Curriculum & Seminar Vault
          </span>
          <h2 className="font-serif text-3xl text-slate-900 mt-1">
            Graduate & Senior Seminars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map((course, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-slate-200">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                  <span className="px-2 py-0.5 rounded bg-red-900/10 text-red-900 font-bold">
                    {course.code}
                  </span>
                  <span>{course.term}</span>
                </div>

                <h3 className="font-serif text-lg text-slate-900 mt-2">
                  {course.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                  {course.level}
                </span>

                <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> Syllabus Ready
                </span>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Syllabus download initiated for " + course.code); }}
                  className="px-3 py-1.5 rounded bg-red-900 text-white text-xs hover:bg-red-800 transition-all flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" /> Download Syllabus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
