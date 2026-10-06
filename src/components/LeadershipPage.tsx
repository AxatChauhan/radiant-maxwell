import React from 'react';
import { ShieldCheck, Award, Briefcase, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface LeadershipPageProps {
  subSection?: string;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ subSection }) => {
  const leadershipRoles = [
    {
      id: 'iqac',
      title: 'IQAC & NAAC',
      roles: [
        { title: 'Coordinator, Internal Quality Assurance Cell (IQAC)', period: 'June 2021 – Present', desc: 'Institutional quality assurance, academic planning and monitoring, AQAR and accreditation documentation, quality enhancement and institutional review.' },
        { title: 'NAAC Coordinator / Accreditation Responsibilities', period: 'Current', desc: 'Accreditation-related documentation, institutional data, quality indicators, evidence management and preparedness for accreditation/reaccreditation.' },
        { title: 'Editor, IQAC Newsletter', period: 'Current', desc: 'Academic documentation, editorial coordination and dissemination of institutional quality initiatives.' }
      ]
    },
    {
      id: 'ncte',
      title: 'NCTE / Teacher Education',
      roles: [
        { title: 'NCTE PAR Coordinator', period: '2021 – Present', desc: 'Regulatory compliance, institutional documentation and Performance Appraisal Report processes for teacher education.' }
      ]
    },
    {
      id: 'placement',
      title: 'Placement & Career Counselling',
      roles: [
        { title: 'Placement Officer', period: '2021 – Present', desc: 'Placement initiatives, employability support, professional networking and student career development.' },
        { title: 'Career Counselling Coordinator', period: '2021 – Present', desc: 'Career guidance, competitive-examination awareness and professional-development initiatives.' }
      ],
      deliveredSessions: [
        { title: 'English Beyond Graduation: Career Pathways for English Students', venue: 'Anand Arts College (22 Aug 2026)' },
        { title: 'Effective Resume Writing', venue: 'G.J. Patel Institute of Ayurvedic Studies and Research (05 May 2026)' },
        { title: 'Resume Writing Workshop', venue: 'P.G. Dept. of Education, Sardar Patel University (05 Feb 2026)' },
        { title: 'Career Counselling', venue: 'Anand College of Education (28 Jan 2026)' },
        { title: 'Preparation for Competitive Exams', venue: 'Waymade College of Education (22 Jan 2026)' }
      ]
    },
    {
      id: 'gsirf',
      title: 'GSIRF',
      roles: [
        { title: 'GSIRF Nodal Officer', period: '2021 – Present', desc: 'Institutional data, documentation and submissions under the Gujarat State Institutional Ranking Framework.' }
      ]
    },
    {
      id: 'rdc-lead',
      title: 'RDC – Research & Development Cell',
      roles: [
        { title: 'Coordinator, Research & Development Cell (RDC)', period: 'Current', desc: 'Research promotion, research-policy implementation, faculty research engagement, research capacity building and development of institutional research culture.' }
      ]
    },
    {
      id: 'induction',
      title: 'Student Induction',
      roles: [
        { title: 'Student Induction Programme Coordinator', period: 'Current', desc: 'Planning and coordination of orientation, induction and student academic-development activities.' }
      ]
    },
    {
      id: 'editorial',
      title: 'Editorial Roles',
      roles: [
        { title: 'Editor, ELEF Annual Journal & ELEF Book', period: 'Current', desc: 'Editorial planning, academic content coordination and dissemination of scholarship in English Language Education.' },
        { title: 'Editor, IQAC Newsletter', period: 'Current', desc: 'Academic documentation, editorial coordination and dissemination of institutional quality initiatives.' },
        { title: 'Editor of Four Academic Books', period: '2020 – 2025', desc: 'Edited academic volumes in ELT, Post-method Pedagogy, UGC NET English, and Knowledge Systems.' }
      ]
    },
    {
      id: 'curriculum',
      title: 'Curriculum Development',
      roles: [
        { title: 'Curriculum Development / B.Ed. (English) Syllabus Construction', period: 'Academic Contribution', desc: 'Contribution to curriculum and syllabus design in English pedagogy and teacher education.' }
      ]
    },
    {
      id: 'other-resp',
      title: 'Other Institutional Responsibilities',
      roles: [
        { title: 'Social Media Convener', period: 'Current', desc: 'Academic communication and dissemination of institutional activities through official digital platforms.' },
        { title: 'Academic Calendar & Action Plan Coordination', period: 'Current', desc: 'Institutional academic planning, scheduling and action-plan documentation.' }
      ]
    }
  ];

  return (
    <div className="space-y-16 animate-fade-in pt-4">
      
      {/* Title Header */}
      <div className="pb-4 border-b border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-red-900 font-semibold">Institutional Governance</span>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mt-1">Academic Leadership</h1>
        <p className="text-sm text-slate-600 font-light mt-1">IQAC, NAAC, GSIRF, NCTE, RDC, Placement, Editorial, and Institutional Quality Leadership.</p>
      </div>

      {/* Leadership Sections Grid */}
      <div className="space-y-10">
        {leadershipRoles.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4">
            <div className="pb-2 border-b border-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-900" />
              <h2 className="font-serif text-2xl text-slate-900">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.roles.map((r, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-red-900 font-bold bg-red-50 px-2.5 py-0.5 rounded border border-red-200">{r.period}</span>
                  </div>
                  <h3 className="font-serif text-base font-medium text-slate-900">{r.title}</h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Delivered Career Sessions inside Placement tab */}
            {section.deliveredSessions && (
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3 mt-4">
                <h4 className="text-xs font-mono uppercase font-semibold text-amber-900">Career & Guidance Sessions Delivered</h4>
                <div className="space-y-2 text-xs">
                  {section.deliveredSessions.map((s, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                        <span className="font-medium text-slate-900">{s.title}</span>
                      </div>
                      <span className="text-slate-500 pl-6 sm:pl-0">• {s.venue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

    </div>
  );
};
