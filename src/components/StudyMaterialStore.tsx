import React, { useState } from 'react';
import { Search, Filter, Star, Eye, ShoppingBag, Check, Sparkles, BookOpen } from 'lucide-react';
import { STUDY_MATERIALS, StudyMaterial } from '../data/professorData';

interface StudyMaterialStoreProps {
  onSelectPreview: (material: StudyMaterial) => void;
  onAddToCart: (material: StudyMaterial) => void;
  cartItemIds: string[];
}

export const StudyMaterialStore: React.FC<StudyMaterialStoreProps> = ({
  onSelectPreview,
  onAddToCart,
  cartItemIds
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Exam Guides', 'Annotated Classics', 'Seminar Notes', 'PhD Blueprints', 'Syllabus Packs'];

  const filteredMaterials = STUDY_MATERIALS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-900"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">
              Verified Academic Resources & Study Archives
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Doctoral Study Vault & Course Archives
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl font-light leading-relaxed">
            Curated reading guides, annotated master classic editions, and doctoral exam blueprints authored by Dr. Julian Thorne for literature scholars, graduate candidates, and undergraduate researchers.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides, Twain, Dante, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs text-slate-500 font-medium flex items-center gap-1 pr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-red-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((item) => {
          const inCart = cartItemIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden bg-white"
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-red-50 text-red-900 border border-red-200 flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    {item.badge}
                  </span>
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-red-900 font-semibold">
                  {item.category}
                </span>

                <h3 className="font-serif text-xl font-normal text-slate-900 mt-1 group-hover:text-red-900 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-light line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Rating & Stats */}
                <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1 text-amber-600 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{item.rating}</span>
                    <span className="text-slate-400 font-normal text-[11px]">({item.reviewsCount})</span>
                  </div>
                  <span>•</span>
                  <span>{item.pages} pages</span>
                  <span>•</span>
                  <span className="font-mono text-[11px]">{item.fileSize}</span>
                </div>

                <p className="text-xs text-slate-600 mt-4 leading-relaxed font-light line-clamp-3">
                  {item.description}
                </p>

                {/* Features checklist snippet */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                  {item.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 truncate">
                      <span className="text-red-900 font-bold">✓</span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wide font-mono">Price</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-xl font-bold text-slate-900">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">${item.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectPreview(item)}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:border-red-900 hover:text-red-900 transition-all"
                    title="View Sample Excerpt & Annotations"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onAddToCart(item)}
                    className={`px-4 py-2.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      inCart
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                        : 'bg-red-900 hover:bg-red-800 text-white shadow-sm'
                    }`}
                  >
                    {inCart ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" /> Add (${item.price})
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          <p className="text-sm">No study materials match your search query.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs text-red-900 underline font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};
