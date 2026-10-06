import React from 'react';
import { PROFESSOR_INFO, QUALIFICATIONS, ELIGIBILITIES, EXPERIENCES, EXPERTISE_AREAS, MEMBERSHIPS } from '../data/professorData';
import { GraduationCap, Award, Briefcase, BookOpen, Heart, Users, CheckCircle, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  subSection?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ subSection }) => {
  return (
    <div className="space-y-16 animate-fade-in pt-4">
      
      {/* Title Header */}
      <div className="pb-4 border-b border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Faculty Profile</span>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mt-1">About Dr. Rajnikant S. Dodiya</h1>
        <p className="text-sm text-slate-600 font-light mt-1">Assistant Professor – English Language Pedagogy & Education, HMPIETR</p>
      </div>

      {/* 2.1 Profile */}
      <section id="profile" className="glass-card rounded-3xl p-8 bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-red-900">
          <GraduationCap className="w-5 h-5" />
          <h2 className="font-serif text-2xl text-slate-900">Academic Profile</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-light">
          {PROFESSOR_INFO.fullProfile}
        </p>
      </section>

      {/* 2.2 Qualifications & Eligibility */}
      <section id="qualifications" className="space-y-8">
        <div className="pb-2 border-b border-slate-200 flex items-center gap-2">
          <Award className="w-5 h-5 text-red-900" />
          <h2 className="font-serif text-2xl text-slate-900">Qualifications & Eligibility</h2>
        </div>

        {/* Academic Qualifications Table */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-semibold uppercase text-slate-700">Academic Qualifications</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 font-mono text-[11px] uppercase">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Qualification</th>
                  <th className="py-3 px-4">University / Institution</th>
                  <th className="py-3 px-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {QUALIFICATIONS.map((q, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono font-semibold text-red-900">{q.year}</td>
                    <td className="py-3 px-4 font-medium text-slate-900">{q.qualification}</td>
                    <td className="py-3 px-4">{q.institution}</td>
                    <td className="py-3 px-4 text-slate-500 font-light">{q.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-slate-800 space-y-1 font-light">
            <span className="font-semibold text-amber-900 block">Ph.D. Details:</span>
            <p>P.G. Department of Education, Sardar Patel University; Registration No. {PROFESSOR_INFO.phdDetails.regNo}.</p>
            <p>Research Guide: {PROFESSOR_INFO.phdDetails.guide}. Result declared: {PROFESSOR_INFO.phdDetails.resultDeclared}.</p>
          </div>
        </div>

        {/* Eligibility Table */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono font-semibold uppercase text-slate-700">National & State Eligibility Examinations</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 font-mono text-[11px] uppercase">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Examination</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Conducting Body</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ELIGIBILITIES.map((e, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono font-semibold text-red-900">{e.year}</td>
                    <td className="py-3 px-4 font-medium text-slate-900">{e.examination}</td>
                    <td className="py-3 px-4">{e.subject}</td>
                    <td className="py-3 px-4 text-slate-500">{e.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Qualifications */}
        <div className="space-y-2">
          <h3 className="text-sm font-mono font-semibold uppercase text-slate-700">Additional Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <span className="font-semibold text-slate-900">CCC Plus (Computer)</span>
              <span className="font-mono text-red-900 font-bold">2024 (BAOU)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <span className="font-semibold text-slate-900">Hindi Vinit (Hindi Language)</span>
              <span className="font-mono text-red-900 font-bold">2022 (Gujarat Vidyapith)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <span className="font-semibold text-slate-900">CCC Plus (Computer)</span>
              <span className="font-mono text-red-900 font-bold">2016 (SPIPA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 Professional Experience */}
      <section id="experience" className="space-y-4">
        <div className="pb-2 border-b border-slate-200 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-red-900" />
          <h2 className="font-serif text-2xl text-slate-900">Professional Experience</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 font-mono text-[11px] uppercase">
              <tr>
                <th className="py-3 px-4">Period</th>
                <th className="py-3 px-4">Position</th>
                <th className="py-3 px-4">Institution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {EXPERIENCES.map((exp, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80">
                  <td className="py-3.5 px-4 font-mono font-semibold text-red-900 whitespace-nowrap">{exp.period}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-900">{exp.position}</td>
                  <td className="py-3.5 px-4 text-slate-600">{exp.institution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2.4 Areas of Expertise */}
      <section id="expertise" className="space-y-4">
        <div className="pb-2 border-b border-slate-200 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-900" />
          <h2 className="font-serif text-2xl text-slate-900">Areas of Expertise</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EXPERTISE_AREAS.map((area, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 text-xs text-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-red-900 shrink-0"></span>
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 Vision & Academic Philosophy */}
      <section id="philosophy" className="glass-card rounded-3xl p-8 bg-amber-50/50 border border-amber-200 space-y-3">
        <div className="flex items-center gap-2 text-amber-900">
          <Heart className="w-5 h-5 text-amber-800" />
          <h2 className="font-serif text-2xl text-slate-900">Vision & Academic Philosophy</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-light italic">
          "{PROFESSOR_INFO.academicPhilosophy}"
        </p>
      </section>

      {/* 2.6 Memberships */}
      <section id="memberships" className="space-y-4">
        <div className="pb-2 border-b border-slate-200 flex items-center gap-2">
          <Users className="w-5 h-5 text-red-900" />
          <h2 className="font-serif text-2xl text-slate-900">Professional Memberships & Associations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MEMBERSHIPS.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 text-xs flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-mono text-red-900 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">{m.type}</span>
                <h4 className="font-serif text-sm font-medium text-slate-900 mt-2">{m.association}</h4>
              </div>
              <span className="text-[11px] font-mono text-slate-500 mt-3">{m.period}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
