/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { fullVariants } from "./data/copyVariants";
import { MapPin, ShieldCheck } from "lucide-react";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import PensionCalculator from "./components/PensionCalculator";
import ProblemSection from "./components/ProblemSection";
import UniqueMechanismSection from "./components/UniqueMechanismSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ComparisonSection from "./components/ComparisonSection";
import SocialProofSection from "./components/SocialProofSection";
import AboutUsSection from "./components/AboutUsSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import LegalModal from "./components/LegalModal";

export default function App() {
  const activeVariant = fullVariants.trust;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* HEADER */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-md'} border-b border-gray-100 py-4`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tighter text-navy flex items-center gap-2">
            <img 
              src="https://cuirapartners.ch/wp-content/uploads/2024/11/Cuira-Schriftzug-350x150-1.png" 
              alt="Cuira Partners" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://calendly.com/kathir-cuira/erstgesprach"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-6 py-2.5 bg-navy text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all"
            >
              Erstgespräch
            </a>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            >
              <span className={`w-6 h-0.5 bg-navy transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-navy transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-navy transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-8 flex flex-col items-center gap-6">
            <a 
              href="https://calendly.com/kathir-cuira/erstgesprach"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 bg-navy text-white rounded-xl text-xs font-bold uppercase tracking-widest text-center"
            >
              Erstgespräch vereinbaren
            </a>
            <div className="text-[10px] text-navy/40 uppercase tracking-widest font-bold text-center">
              Unabhängige Experten für Ihre Pensionsplanung
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection copy={activeVariant.hero} />
        <TrustSection />
        <PensionCalculator />
        <ProblemSection />
        <UniqueMechanismSection />
        <ServicesSection />
        <ProcessSection />
        <ComparisonSection copy={activeVariant.comparison} />
        <SocialProofSection />
        <AboutUsSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <footer className="bg-navy py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="max-w-xs">
              <div className="mb-6 flex justify-center md:justify-start">
                <img 
                  src="https://cuirapartners.ch/wp-content/uploads/2024/11/Cuira-Schriftzug-350x150-1.png" 
                  alt="Cuira Partners" 
                  className="h-8 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest font-bold">
                Unabhängige Experten für Ihre Pensionsplanung
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-accent" />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Zürich Office</h4>
                </div>
                <p className="text-white/40 text-xs leading-relaxed uppercase font-mono tracking-tighter pl-8 border-l border-white/5 group-hover:border-accent transition-colors">
                  Cuira Partners GmbH<br />
                  Splügenstrasse 11<br />
                  8002 Zürich
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-accent" />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Rechtliches</h4>
                </div>
                <div className="pl-8 border-l border-white/5 group-hover:border-accent transition-colors">
                  <button 
                    onClick={() => setIsLegalOpen(true)}
                    className="text-white/40 text-xs hover:text-accent transition-all uppercase font-mono tracking-tighter text-left"
                  >
                    Impressum & Datenschutz
                  </button>
                  <p className="mt-1 text-[9px] text-white/20 uppercase tracking-widest font-bold">
                    Reguliert & Zertifiziert
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">
            <span>© 2026 Cuira Partners GmbH – Alle Rechte vorbehalten</span>
            <div className="flex gap-8">
              <span>Zugelassen als Finanzdienstleister in der Schweiz</span>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </div>
  );
}

