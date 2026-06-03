import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  const [state, handleSubmit] = useForm('xlgkegpa');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden"
          >
            <div className="relative p-8 md:p-12">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hove:bg-bg-alt rounded-full transition-colors group"
                aria-label="Schliessen"
              >
                <X className="w-5 h-5 text-navy/30 group-hover:text-navy transition-colors" />
              </button>

              {!state.succeeded ? (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-2xl mb-6">
                      <Download className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Whitepaper anfordern</h2>
                    <p className="text-navy/50 text-sm">
                      Geben Sie Ihre Daten ein, um den exklusiven Leitfaden für Ihre Pensionsplanung direkt per E-Mail zu erhalten.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-navy/40 ml-4">Vorname</label>
                        <input
                          required
                          type="text"
                          name="firstname"
                          placeholder="z.B. Hans"
                          className="w-full px-6 py-4 bg-bg-alt rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none transition-all text-navy placeholder:text-navy/20"
                        />
                        <ValidationError prefix="Vorname" field="firstname" errors={state.errors} className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-4 mt-1" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-navy/40 ml-4">Name</label>
                        <input
                          required
                          type="text"
                          name="lastname"
                          placeholder="z.B. Müller"
                          className="w-full px-6 py-4 bg-bg-alt rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none transition-all text-navy placeholder:text-navy/20"
                        />
                        <ValidationError prefix="Name" field="lastname" errors={state.errors} className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-4 mt-1" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-navy/40 ml-4">E-Mail-Adresse</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="beispiel@domain.ch"
                        className="w-full px-6 py-4 bg-bg-alt rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none transition-all text-navy placeholder:text-navy/20"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-4 mt-1" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-navy/40 ml-4">Telefonnummer</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+41 79 123 45 67"
                        className="w-full px-6 py-4 bg-bg-alt rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white outline-none transition-all text-navy placeholder:text-navy/20"
                      />
                      <ValidationError prefix="Telefonnummer" field="phone" errors={state.errors} className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-4 mt-1" />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full py-5 bg-navy text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all flex items-center justify-center gap-3 shadow-xl shadow-navy/10 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {state.submitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Download anfordern
                            <Download className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-[9px] text-center text-navy/30 uppercase tracking-widest px-8">
                      Mit der Anforderung akzeptieren Sie unsere Datenschutzbestimmungen.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">Fast geschafft!</h2>
                  <div className="space-y-4">
                    <p className="text-navy/50 text-sm max-w-sm mx-auto">
                      Wir haben Ihnen soeben eine E-Mail mit dem Download-Link gesendet. Sie können das Whitepaper aber auch direkt hier öffnen:
                    </p>
                    <a 
                      href="https://raw.githubusercontent.com/yathur-hub/cuira-Pensionsplanung-LP1-BrandAssets/main/Cuira_Partners_Pensionsplanung_Whitepaper_2026_v3.1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-2xl hover:bg-navy transition-all uppercase text-xs tracking-widest shadow-lg shadow-accent/20"
                    >
                      Whitepaper öffnen
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={onClose}
                      className="text-navy/30 hover:text-navy text-[10px] font-bold uppercase tracking-widest transition-colors"
                    >
                      Fenster schliessen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
