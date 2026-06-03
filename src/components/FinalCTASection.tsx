/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-40 relative bg-navy text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(108,121,240,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Ihr nächster Schritt</span>
          <h2 className="text-5xl md:text-7xl mb-12 leading-[1.1]">Bereit für eine Pensionierung <span className="text-accent italic">nach Ihren Regeln?</span></h2>
          <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed">
            Sichern Sie sich jetzt Ihr kostenloses, 30-minütiges Erstgespräch. Wir klären Ihre Fragen und geben Ihnen eine erste Einschätzung Ihrer Situation.
          </p>

          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="https://calendly.com/kathir-cuira/erstgesprach"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl flex items-center gap-4 text-xl shadow-2xl shadow-accent/20 transition-all"
            >
              Termin jetzt vereinbaren
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            
            <div className="flex items-center gap-4 text-white/30 text-sm font-mono uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>unverbindlich & kostenlos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
