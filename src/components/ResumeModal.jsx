import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * ResumeModal Component
 * Allows visitors to view the resume directly in an interactive modal,
 * with a dedicated download action area at the top.
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FAF8F3] dark:bg-navy-950 rounded-2xl border border-cream-300 dark:border-navy-800 shadow-soft-lg overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-cream-200 dark:border-navy-800/80 bg-white/70 dark:bg-navy-900/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="resume-modal-title"
                className="text-base sm:text-lg font-bold text-navy-900 dark:text-white"
              >
                Resume Preview
              </h2>
              <p className="text-xs text-navy-600 dark:text-slate-400">
                {personal.name} &bull; {personal.role}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-navy-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-cream-200/60 dark:hover:bg-navy-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dedicated Download Area */}
        <div className="px-5 sm:px-6 py-3.5 bg-cream-100/80 dark:bg-navy-900/90 border-b border-cream-200 dark:border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-navy-800 dark:text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>
              Official document: <strong>Jobert_Ortiz_Resume.pdf</strong>
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={personal.resumeUrl}
              download="Jobert_Ortiz_Resume.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400 font-semibold text-xs sm:text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Download className="w-4 h-4" />
              <span>Download resume</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-navy-300 dark:border-navy-700 hover:bg-white dark:hover:bg-navy-800 text-navy-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              title="Open PDF in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 p-3 sm:p-5 overflow-auto bg-slate-100/60 dark:bg-navy-950/60 flex flex-col items-center justify-center min-h-[50vh]">
          <object
            data={personal.resumeUrl}
            type="application/pdf"
            className="w-full h-[62vh] rounded-xl border border-cream-200 dark:border-navy-800 bg-white shadow-inner"
          >
            {/* Fallback if browser does not support embedded PDF viewer */}
            <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-white dark:bg-navy-900 rounded-xl">
              <FileText className="w-16 h-16 text-teal-500 mb-3" />
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1">
                Resume Document
              </h3>
              <p className="text-sm text-navy-600 dark:text-slate-300 max-w-md mb-5">
                Your browser may not support inline PDF previews on this device. You can download the resume directly or open it in a new tab.
              </p>
              <a
                href={personal.resumeUrl}
                download="Jobert_Ortiz_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
