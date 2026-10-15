import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Phone, Mail, MapPin, Award, BookOpen, User, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * ResumeModal Component
 * Renders a clean, bespoke document view of the resume without browser PDF plugin chrome,
 * complete with dedicated download controls.
 */
export default function ResumeModal({ isOpen, onClose }) {
  const { personal } = portfolioData;

  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FAF8F3] dark:bg-navy-950 rounded-2xl border border-cream-300 dark:border-navy-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-cream-200 dark:border-navy-800 bg-white dark:bg-navy-900 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
            <h2
              id="resume-modal-title"
              className="text-sm sm:text-base font-bold text-navy-900 dark:text-white"
            >
              Curriculum Vitae
            </h2>
            <span className="hidden sm:inline text-xs text-navy-500 dark:text-slate-400">
              &bull; {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Button in Top Bar */}
            <a
              href={personal.resumeUrl}
              download="Jobert_Ortiz_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400 font-semibold text-xs sm:text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-navy-200 dark:border-navy-700 hover:bg-cream-100 dark:hover:bg-navy-800 text-navy-800 dark:text-slate-200 text-xs font-medium transition-colors"
              title="Open raw PDF file"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Raw PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-navy-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-cream-100 dark:hover:bg-navy-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-200/70 dark:bg-navy-950/80">
          
          {/* Paper Document Sheet (Styling matches user's exact resume) */}
          <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-300 grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: Grey/Sage Accent */}
            <div className="md:col-span-5 bg-[#dbe1de] text-slate-800 p-6 sm:p-7 space-y-7 border-r border-slate-300/80">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 border-b border-teal-800/30 pb-1.5 mb-3">
                  Contact
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>09630689923</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span className="break-all">{personal.email}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                    <span>Talisay City, Negros Occidental</span>
                  </li>
                </ul>
              </div>

              {/* Certificates */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 border-b border-teal-800/30 pb-1.5 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Certificates</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 leading-snug list-disc list-inside">
                  <li>Introduction to Cybersecurity</li>
                  <li>Operational Technology (OT)</li>
                  <li>Cybersecurity Essentials: Defending Critical Infrastructure</li>
                  <li>Cloud Security Architecture for the Enterprise</li>
                  <li>Ethical Hacking: Cloud Computing</li>
                  <li>Introduction of Offensive Security</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Main Resume Information */}
            <div className="md:col-span-7 bg-white p-6 sm:p-8 space-y-6">
              {/* Name & Title */}
              <div className="border-b border-slate-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-900 font-heading">
                  JOBERT B. ORTIZ JR.
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-1 uppercase tracking-wider">
                  {personal.role}
                </p>
              </div>

              {/* Profile */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-2">
                  Profile
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {Array.isArray(personal.bio) ? personal.bio[0] : personal.bio}
                </p>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-2.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Personal Information</span>
                </h3>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div>
                    <span className="font-semibold text-slate-700">Birthplace: </span>
                    Silay City
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Birthdate: </span>
                    June 14, 2004
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Citizenship: </span>
                    Filipino
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Civil Status: </span>
                    Single
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Education</span>
                </h3>
                <div className="space-y-3 text-xs text-slate-700">
                  <div>
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span>Senior High School</span>
                      <span className="text-[11px] text-teal-700 font-bold">2021 - 2023</span>
                    </div>
                    <div className="text-slate-600">Rafael B. Lacson Memorial High School</div>
                  </div>
                  <div className="border-t border-slate-100 pt-2">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span>College</span>
                      <span className="text-[11px] text-teal-700 font-bold">2023 - Present</span>
                    </div>
                    <div className="text-slate-600">Carlos Hilado Memorial State University</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Bachelor of Science in Information Technology (4th Year)</div>
                  </div>
                </div>
              </div>

              {/* Skills summary */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Core Competencies</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['React 18', 'JavaScript (ES6+)', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MySQL', 'Git & GitHub'].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Download Prompt */}
          <div className="max-w-3xl mx-auto mt-4 p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold text-navy-900 dark:text-white">
                Need an official copy for evaluation or interview?
              </p>
              <p className="text-[11px] sm:text-xs text-navy-600 dark:text-slate-400">
                Download the verified PDF version directly to your device.
              </p>
            </div>
            <a
              href={personal.resumeUrl}
              download="Jobert_Ortiz_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400 font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
