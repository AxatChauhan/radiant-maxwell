import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StudyMaterialStore } from './components/StudyMaterialStore';
import { PortfolioSection } from './components/PortfolioSection';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { CartDrawer } from './components/CartDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { StudyMaterial, PROFESSOR_INFO, COURSES, MARK_TWAIN_QUOTES } from './data/professorData';
import { BookOpen, GraduationCap, Feather, CheckCircle2, Quote, Award } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'store' | 'portfolio' | 'lectures'>('all');
  const [cartItems, setCartItems] = useState<StudyMaterial[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState<StudyMaterial | null>(null);

  const handleAddToCart = (material: StudyMaterial) => {
    if (!cartItems.find((item) => item.id === material.id)) {
      setCartItems([...cartItems, material]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-900 font-sans relative selection:bg-red-900 selection:text-white pb-20">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        setIsConsultationOpen={setIsConsultationOpen}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-24 space-y-16">

        {/* HERO SECTION FOR LANDING PAGE */}
        {activeTab === 'all' && (
          <section className="space-y-12 animate-fade-in pt-4">
            
            {/* Top Academic Crest & Title Header */}
            <div className="glass-card rounded-3xl p-8 md:p-12 bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Hero Copy & Formal Intro */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/10 border border-red-900/20 text-red-900 text-xs font-mono font-semibold">
                    <Award className="w-4 h-4 text-red-900" />
                    <span>Columbia University • Chair of Comparative Literature</span>
                  </div>

                  <h1 className="font-serif text-4xl md:text-6xl text-slate-900 font-normal leading-[1.12] tracking-tight">
                    Scholarship, Satire, & <br />
                    <span className="text-red-900 italic font-serif">The Moral Conscience</span>
                  </h1>

                  <p className="text-base text-slate-600 font-light leading-relaxed max-w-2xl">
                    Official academic site and study resource vault of <strong className="text-slate-900 font-medium">Dr. Rajnikant Dodiya, PhD</strong>. Dedicated to the critical study of Mark Twain’s moral satire, 19th-century American realism, and European poetics.
                  </p>

                  {/* Mark Twain Quote Banner */}
                  <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-slate-800 flex items-start gap-3 shadow-xs">
                    <Quote className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif text-sm italic text-slate-900 font-medium">
                        "{MARK_TWAIN_QUOTES[0].quote}"
                      </p>
                      <span className="text-[11px] font-mono text-amber-900 mt-1 block">
                        — Mark Twain <span className="text-slate-500 font-sans font-normal">({MARK_TWAIN_QUOTES[0].context})</span>
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveTab('store')}
                      className="px-6 py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium shadow-md transition-all flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Browse Study Material Vault
                    </button>

                    <button
                      onClick={() => setActiveTab('portfolio')}
                      className="px-6 py-3 rounded-xl bg-slate-100 border border-slate-300 hover:bg-slate-200 text-xs font-medium text-slate-800 transition-all flex items-center gap-2"
                    >
                      <GraduationCap className="w-4 h-4 text-red-900" />
                      View Academic CV & Monographs
                    </button>
                  </div>
                </div>

                {/* Right Column: Formal Professor Photo Card */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-white">
                    <img
                      src={PROFESSOR_INFO.photoUrl}
                      alt={PROFESSOR_INFO.name}
                      className="w-full h-[420px] object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-red-300 font-semibold block">
                        Academic Chair & Faculty
                      </span>
                      <h3 className="font-serif text-2xl font-normal text-white">
                        {PROFESSOR_INFO.name}
                      </h3>
                      <p className="text-xs text-slate-200 font-light mt-0.5">
                        {PROFESSOR_INFO.title}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Academic Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-10 h-10 rounded-xl bg-red-900/10 text-red-900 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900">
                  Doctoral Exam Blueprints
                </h3>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  50-Canon literature reading matrices, theory synthesis tables, and oral defense prompts.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-10 h-10 rounded-xl bg-red-900/10 text-red-900 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900">
                  Annotated Master Classics
                </h3>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  Line-by-line critical editions of Mark Twain, Dante, and American Realist masterpieces.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-10 h-10 rounded-xl bg-red-900/10 text-red-900 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900">
                  Oxford & Columbia Monographs
                </h3>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  Published monographs and peer-reviewed research papers with MLA citation exports.
                </p>
              </div>
            </div>

          </section>
        )}

        {/* STUDY MATERIAL STORE TAB OR ALL */}
        {(activeTab === 'all' || activeTab === 'store') && (
          <StudyMaterialStore
            onSelectPreview={(mat) => setSelectedPreview(mat)}
            onAddToCart={handleAddToCart}
            cartItemIds={cartItems.map((i) => i.id)}
          />
        )}

        {/* PORTFOLIO & BIOGRAPHY TAB OR ALL */}
        {(activeTab === 'all' || activeTab === 'portfolio') && (
          <PortfolioSection
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {/* LECTURES & COURSES TAB */}
        {activeTab === 'lectures' && (
          <section className="space-y-8 animate-fade-in pt-4">
            <div className="pb-4 border-b border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">
                University Course Archives & Lecture Vault
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mt-1">
                Graduate & Doctoral Seminars
              </h2>
              <p className="text-sm text-slate-600 font-light mt-1 leading-relaxed">
                Access official university course syllabi, reading packets, and examination questions authored by Dr. Dodiya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COURSES.map((course, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-slate-200">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-red-900/10 text-red-900 font-mono font-bold text-xs">
                      {course.code}
                    </span>
                    <h3 className="font-serif text-xl text-slate-900 mt-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1">{course.level} • {course.term}</p>
                    <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Syllabus Ready
                    </span>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert("Downloading syllabus for " + course.code); }}
                      className="px-4 py-2 rounded-lg bg-red-900 text-white text-xs font-medium hover:bg-red-800 transition-all flex items-center gap-1.5"
                    >
                      Download Pack
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Feather className="w-4 h-4 text-red-900" />
          <span>© {new Date().getFullYear()} Dr. Rajnikant Dodiya, PhD • Columbia University Department of Humanities.</span>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={() => setActiveTab('all')} className="hover:text-slate-900">Overview</button>
          <button onClick={() => setActiveTab('store')} className="hover:text-slate-900">Study Materials</button>
          <button onClick={() => setActiveTab('portfolio')} className="hover:text-slate-900">CV & Monographs</button>
          <button onClick={() => setIsConsultationOpen(true)} className="hover:text-slate-900">Advising Request</button>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <SamplePreviewModal
        material={selectedPreview}
        onClose={() => setSelectedPreview(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}
