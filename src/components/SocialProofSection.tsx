/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Hans-Ruedi M.",
      title: "Ex-CEO & Unternehmer",
      text: "Endlich eine Beratung, die nicht versucht hat mir eine neue Versicherung zu verkaufen. Die Steuerersparnis beim Kapitalbezug war massiv."
    },
    {
      name: "Dr. Elena S.",
      title: "Privatärztin",
      text: "Professionell, diskret und vor allem unbestechlich. Ich wusste jederzeit, wofür ich bezahle und was der Gegenwert ist."
    },
    {
      name: "Marcus & Sonia K.",
      title: "Immobilienbesitzer",
      text: "Dank Cuira Partners konnten wir unser Haus halten und haben trotzdem genug Cashflow für Reisen im Ruhestand."
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-bg-alt relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-navy/5 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10" />
              <p className="text-navy/80 text-lg leading-relaxed mb-10 italic">"{t.text}"</p>
              <div>
                <h5 className="font-bold text-navy">{t.name}</h5>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
