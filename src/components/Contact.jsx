import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for field once user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message asynchronously
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 md:py-24 border-t border-dashed border-cream-300 dark:border-navy-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching wireframe */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white inline-block relative">
            Contact
            <span className="block h-1 w-12 bg-teal-500 rounded-full mt-2" />
          </h2>
          <p className="text-navy-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Have a project in mind, a question, or an opportunity? Feel free to reach out using the form below.
          </p>
        </div>

        {/* Contact Form Container (Matches Wireframe structure: Name, Email, Message, Send message) */}
        <div className="max-w-2xl bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border border-cream-200 dark:border-navy-800 shadow-soft">
          
          {isSubmitted && (
            <div
              role="alert"
              className="mb-6 p-4 rounded-xl bg-teal-500/15 border border-teal-500/40 text-navy-900 dark:text-teal-200 flex items-start gap-3 animate-fade-in"
            >
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Thank you for your message!</p>
                <p className="text-xs mt-0.5 text-navy-700 dark:text-teal-300">
                  Your message has been received. I will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-semibold underline text-teal-600 dark:text-teal-300 hover:text-navy-900 dark:hover:text-white"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-navy-900 dark:text-slate-200 mb-1.5"
              >
                Name <span className="text-teal-600 dark:text-teal-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors bg-cream-50 dark:bg-navy-950 text-navy-900 dark:text-slate-100 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? 'border-red-400 focus:ring-red-400 dark:border-red-500'
                    : 'border-cream-300 dark:border-navy-700 focus:border-transparent focus:ring-teal-500'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-navy-900 dark:text-slate-200 mb-1.5"
              >
                Email <span className="text-teal-600 dark:text-teal-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors bg-cream-50 dark:bg-navy-950 text-navy-900 dark:text-slate-100 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-400 dark:border-red-500'
                    : 'border-cream-300 dark:border-navy-700 focus:border-transparent focus:ring-teal-500'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-navy-900 dark:text-slate-200 mb-1.5"
              >
                Message <span className="text-teal-600 dark:text-teal-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors bg-cream-50 dark:bg-navy-950 text-navy-900 dark:text-slate-100 focus:outline-none focus:ring-2 resize-y ${
                  errors.message
                    ? 'border-red-400 focus:ring-red-400 dark:border-red-500'
                    : 'border-cream-300 dark:border-navy-700 focus:border-transparent focus:ring-teal-500'
                }`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Send Message Button matching wireframe */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-900 text-white hover:bg-teal-600 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400 font-medium text-sm sm:text-base shadow-sm hover:shadow-soft transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send message</span>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
