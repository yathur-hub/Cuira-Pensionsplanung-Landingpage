/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Scale } from "lucide-react";

export default function UniqueMechanismSection() {
  return (
    <section id="mechanism" className="py-32 bg-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/30 shadow-2xl shadow-accent/20">
              <Scale className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Wir sitzen auf Ihrer <span className="text-accent underline decoration-accent/30 underline-offset-8">Seite</span> des Verhandlungstisches.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Als Honorarberater ist unser einziger Profit Ihr finanzieller Vorteil. Wir nehmen keine Provisionen von Dritten an – so bleibt unsere Beratung unbestechlich.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Keine Provisionen", 
              desc: "Wir lehnen jegliche Form von Kickbacks oder Retrozessionen strikt ab.",
              icon: "01"
            },
            { 
              title: "Transparentes Honorar", 
              desc: "Sie wissen auf den Franken genau, was unsere Dienstleistung kostet.",
              icon: "02"
            },
            { 
              title: "Produkt-Indifferenz", 
              desc: "Da wir nichts verkaufen, empfehlen wir nur, was wirklich nötig ist.",
              icon: "03"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all"
            >
              <span className="text-4xl font-serif text-accent/30 mb-6 block">{item.icon}</span>
              <h4 className="text-2xl mb-4 font-bold tracking-tight">{item.title}</h4>
              <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
