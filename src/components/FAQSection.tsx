/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    { q: "Was kostet die Beratung bei Cuira Partners?", a: "Wir arbeiten auf Honorarbasis. Nach dem Erstgespräch erhalten Sie ein individuelles Angebot je nach Komplexität Ihrer Situation." },
    { q: "Verwalten Sie auch mein Vermögen?", a: "Nein. Wir optimieren Ihre Strategie, aber Ihr Geld bleibt bei Ihrer Depotbank. Wir beraten nur, wie Sie es am besten strukturieren." },
    { q: "Wieso ist Honorarberatung besser?", a: "Weil wir nicht an Provisionen verdienen. Das spart Ihnen langfristig oft fünfstellige Summen an verdeckten Gebühren." },
    { q: "Ab welchem Vermögen lohnt sich Ihre Beratung?", a: "Unsere Expertise entfaltet ihre volle Wirkung bei komplexeren Verhältnissen, oft ab einem Haushaltsvermögen von CHF 500'000." }
  ];

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl mb-16 text-center leading-tight">Häufige Fragen zur <br /><span className="text-accent underline decoration-accent/10 underline-offset-8">unabhängigen Beratung.</span></h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-bg-alt rounded-3xl border border-transparent hover:border-accent/10 transition-all cursor-default group/faq"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold font-sans pr-8">{faq.q}</h4>
                <Plus className="w-5 h-5 text-accent flex-shrink-0 group-hover/faq:rotate-90 transition-transform duration-300" />
              </div>
              <p className="text-gray-500 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
