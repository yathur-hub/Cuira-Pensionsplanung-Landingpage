import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Markdown from 'react-markdown';
import { legalContent } from '../data/legalContent';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
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
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl z-[101] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-navy/5">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cuirapartners.ch/wp-content/uploads/2024/11/Cuira-Schriftzug-350x150-1.png" 
                  alt="Cuira Partners" 
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy/30 border-l border-navy/10 pl-3">Rechtliches</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-bg-alt rounded-full transition-colors border border-navy/5"
              >
                <X className="w-5 h-5 text-navy/40" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="markdown-body prose prose-slate max-w-none">
                  <Markdown>{legalContent}</Markdown>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-navy/5 bg-bg-alt/30 flex justify-center">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-navy text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all"
              >
                Schliessen
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
