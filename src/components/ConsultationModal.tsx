import React, { useState } from 'react';
import { X, Calendar, Send, Check } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [topic, setTopic] = useState('Doctoral Advising');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-red-900" />
            <h3 className="font-serif text-lg text-slate-900">Academic Advising & Office Hours</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-xl text-slate-900">Request Submitted</h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you, {name}. Dr. Rajnikant Dodiya's academic secretary will review your consultation request and reply to <span className="text-slate-900 font-semibold">{email}</span> within 2 business days.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2 rounded-lg bg-red-900 text-white text-xs font-medium"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="text-slate-700 font-medium block mb-1">Full Name & Honorific</label>
              <input
                required
                type="text"
                placeholder="e.g. Eleanor Vance (PhD Candidate)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-700 font-medium block mb-1">Institutional Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900"
                />
              </div>
              <div>
                <label className="text-slate-700 font-medium block mb-1">University / Department</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Oxford / Columbia"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-1">Consultation Focus</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900"
              >
                <option value="Doctoral Advising">Doctoral Dissertation Advising</option>
                <option value="Comprehensive Exam Prep">Comprehensive Exam Prep Strategy</option>
                <option value="Monograph Pitch Review">Monograph Publisher Pitch Review</option>
                <option value="Guest Lecture Request">Guest Lecture & Symposium Keynote</option>
              </select>
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-1">Research Abstract / Inquiry</label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your thesis topic or inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              Submit Consultation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
