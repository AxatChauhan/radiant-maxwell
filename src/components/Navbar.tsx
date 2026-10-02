import React from 'react';
import { ShoppingBag, BookOpen, Feather, GraduationCap, Layers, Calendar } from 'lucide-react';
import { StudyMaterial, PROFESSOR_INFO } from '../data/professorData';

interface NavbarProps {
  activeTab: 'all' | 'store' | 'portfolio' | 'lectures';
  setActiveTab: (tab: 'all' | 'store' | 'portfolio' | 'lectures') => void;
  cartItems: StudyMaterial[];
  setIsCartOpen: (open: boolean) => void;
  setIsConsultationOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartItems,
  setIsCartOpen,
  setIsConsultationOpen
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 md:px-8 py-3.5 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveTab('all')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/30 flex items-center justify-center text-red-900 group-hover:scale-105 group-hover:bg-red-900 group-hover:text-white transition-all">
            <Feather className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-normal tracking-tight text-slate-900">
                {PROFESSOR_INFO.name.replace(', PhD', '')}
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-red-900/10 text-red-900 font-semibold border border-red-900/20">
                PhD
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-wide font-light">
              Chair of Comparative Literature • Columbia University
            </p>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-red-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('store')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeTab === 'store'
                ? 'bg-red-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Study Material Store
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeTab === 'portfolio'
                ? 'bg-red-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Monographs & CV
          </button>
          <button
            onClick={() => setActiveTab('lectures')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeTab === 'lectures'
                ? 'bg-red-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Courses & Syllabi
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-700 bg-slate-100 hover:bg-red-900 hover:text-white border border-slate-300 transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-red-900 group-hover:text-white" />
            Academic Advising
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-red-900 text-white transition-all shadow-sm group"
          >
            <ShoppingBag className="w-4 h-4 text-red-400 group-hover:text-white transition-colors" />
            <span className="text-xs font-medium hidden sm:inline">
              ${totalPrice.toFixed(2)}
            </span>
            {cartItems.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Nav Bar */}
      <div className="flex lg:hidden items-center justify-around mt-2 pt-2 border-t border-slate-200 text-xs">
        <button
          onClick={() => setActiveTab('all')}
          className={`py-1 ${activeTab === 'all' ? 'text-red-900 font-semibold' : 'text-slate-600'}`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('store')}
          className={`py-1 ${activeTab === 'store' ? 'text-red-900 font-semibold' : 'text-slate-600'}`}
        >
          Store
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`py-1 ${activeTab === 'portfolio' ? 'text-red-900 font-semibold' : 'text-slate-600'}`}
        >
          Monographs
        </button>
        <button
          onClick={() => setActiveTab('lectures')}
          className={`py-1 ${activeTab === 'lectures' ? 'text-red-900 font-semibold' : 'text-slate-600'}`}
        >
          Courses
        </button>
      </div>
    </header>
  );
};
