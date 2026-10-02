import React from 'react';
import { X, FileText, CheckCircle, Download, Bookmark } from 'lucide-react';
import { StudyMaterial } from '../data/professorData';

interface SamplePreviewModalProps {
  material: StudyMaterial | null;
  onClose: () => void;
  onAddToCart: (material: StudyMaterial) => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({
  material,
  onClose,
  onAddToCart
}) => {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-900/10 border border-red-900/20 flex items-center justify-center text-red-900">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-900 font-semibold">
                Verified Academic Sample Preview
              </span>
              <h3 className="font-serif text-lg font-normal text-slate-900">
                {material.title}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Metadata bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block font-mono">Category</span>
              <span className="font-medium text-slate-900">{material.category}</span>
            </div>
            <div>
              <span className="text-slate-500 block font-mono">Page Count</span>
              <span className="font-medium text-slate-900">{material.pages} pages</span>
            </div>
            <div>
              <span className="text-slate-500 block font-mono">Format</span>
              <span className="font-medium text-slate-900">{material.downloadFormat}</span>
            </div>
            <div>
              <span className="text-slate-500 block font-mono">File Size</span>
              <span className="font-medium text-slate-900">{material.fileSize}</span>
            </div>
          </div>

          {/* Sample Document Viewer */}
          <div className="border border-slate-300 rounded-xl bg-[#fcfbf9] p-6 shadow-sm font-serif">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs text-slate-500 font-sans">
              <span className="flex items-center gap-1.5 text-red-900 font-medium">
                <FileText className="w-4 h-4" />
                {material.samplePreview.chapterTitle}
              </span>
              <span>Sample Page 14 of {material.pages}</span>
            </div>

            {/* Excerpt Body */}
            <div className="space-y-4 text-slate-800 leading-relaxed text-base italic bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
              <p>"{material.samplePreview.excerptText}"</p>
            </div>

            {/* Dr. Dodiya's Margin Annotations */}
            <div className="mt-6 pt-4 border-t border-slate-200 space-y-3 font-sans">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-900"></span>
                Dr. Dodiya's Marginalia & Critical Notes
              </h4>
              <div className="space-y-2">
                {material.samplePreview.annotations.map((note, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-slate-800 flex items-start gap-2.5">
                    <span className="font-mono text-red-900 font-bold shrink-0">Line {note.line}:</span>
                    <span className="font-light">{note.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Included Features */}
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-3">Included in Full Edition:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {material.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600">
                  <CheckCircle className="w-4 h-4 text-red-900 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs text-slate-500 block font-mono">Instant Digital Access</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-serif text-slate-900">${material.price}</span>
              {material.originalPrice && (
                <span className="text-xs text-[#aab4ad] line-through">${material.originalPrice}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onAddToCart(material);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg bg-red-900 hover:bg-red-800 text-white text-xs font-medium shadow-md flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              Add to Cart & Unlock Full PDF (${material.price})
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
