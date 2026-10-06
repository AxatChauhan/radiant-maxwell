import React, { useState } from 'react';
import { PROFESSOR_INFO } from '../data/professorData';
import { Mail, MapPin, Globe, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Academic Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 animate-fade-in pt-4">
      
      {/* Title Header */}
      <div className="pb-4 border-b border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Communication & Enquiries</span>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mt-1">Contact Dr. Rajnikant S. Dodiya</h1>
        <p className="text-sm text-slate-600 font-light mt-1">Academic correspondence, research collaboration, guest lectures, and institutional inquiries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info Card */}
        <div className="lg:col-span-5 glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-white border border-slate-200 shadow-2xs space-y-6">
          <div>
            <h2 className="font-serif text-2xl text-slate-900">{PROFESSOR_INFO.name}</h2>
            <p className="text-xs text-red-900 font-mono font-semibold mt-0.5">{PROFESSOR_INFO.title}</p>
          </div>

          <div className="space-y-4 text-xs text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-red-900 shrink-0 mt-0.5" />
              <div>
                <strong className="font-medium text-slate-900 block mb-0.5">Institution Address:</strong>
                <p className="font-light leading-relaxed">{PROFESSOR_INFO.institution},</p>
                <p className="font-light leading-relaxed">{PROFESSOR_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-red-900 shrink-0 mt-0.5" />
              <div>
                <strong className="font-medium text-slate-900 block mb-0.5">Official Email:</strong>
                <a href={`mailto:${PROFESSOR_INFO.officialEmail}`} className="text-red-900 font-mono underline hover:text-red-700 block break-all">
                  {PROFESSOR_INFO.officialEmail}
                </a>
                <span className="text-slate-400 block text-[11px] mt-0.5 break-all">Alternate: {PROFESSOR_INFO.alternateEmail}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-red-900 shrink-0 mt-0.5" />
              <div>
                <strong className="font-medium text-slate-900 block mb-0.5">Institute Website:</strong>
                <a href={`https://${PROFESSOR_INFO.instituteWebsite}`} target="_blank" rel="noreferrer" className="text-slate-800 hover:text-red-900 underline block font-mono break-all">
                  {PROFESSOR_INFO.instituteWebsite}
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 font-light">
            Note: For urgent academic inquiries or research collaborations, please send an official email or use the enquiry form.
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="lg:col-span-7 glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-white border border-slate-200 shadow-2xs">
          <h3 className="font-serif text-xl sm:text-2xl text-slate-900 mb-6">Send an Academic Enquiry</h3>

          {submitted ? (
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-slate-900">Enquiry Submitted Successfully</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Your enquiry regarding <span className="font-semibold text-slate-900">"{formData.subject || formData.category}"</span> has been received and forwarded to Dr. Dodiya's email.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', category: 'Academic Inquiry', message: '' }); }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-red-900 text-white text-xs font-medium min-h-[44px]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-700 font-medium block mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Prof. / Dr. / Mr. Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="text-slate-700 font-medium block mb-1">Your Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="name@institution.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-700 font-medium block mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 min-h-[44px]"
                  >
                    <option value="Academic Inquiry">Academic Inquiry</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Invited Lecture / Talk">Invited Lecture / Talk Request</option>
                    <option value="ELEF / CAIELE Programs">ELEF / CAIELE Initiatives</option>
                    <option value="IQAC & Quality Assurance">IQAC & Quality Assurance</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-700 font-medium block mb-1">Subject *</label>
                  <input
                    required
                    type="text"
                    placeholder="Enquiry Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please write your detailed message or enquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-red-900 hover:bg-red-800 text-white text-xs font-medium shadow-md flex items-center justify-center gap-2 transition-all min-h-[44px]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
