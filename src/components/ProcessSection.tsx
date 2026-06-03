/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, Search, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    { 
      icon: Coffee, 
      title: "Kennenlernen", 
      desc: "In einem 30-minütigen Gespräch analysieren wir Ihre Ziele und klären die Machbarkeit Ihrer Vision." 
    },
    { 
      icon: Search, 
      title: "Detail-Analyse", 
      desc: "Wir sichten Ihre Dokumente und erstellen ein fundiertes Konzept für Ihre optimale Pensionierung." 
    },
    { 
      icon: Rocket, 
      title: "Umsetzung", 
      desc: "Wir begleiten Sie bei der Realisierung – von Steuerspartricks bis zur Neugestaltung Ihres Portfolios." 
    }
  ];

  return (
    <section id="process" className="py-32 bg-bg-alt relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl mb-6">Ein klarer Weg zu Ihrer <span className="italic">Wunsch-Pension.</span></h2>
          <p className="text-gray-500">In drei einfachen Schritten von der Unsicherheit zur finanziellen Souveränität.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[2.75rem] left-[20%] right-[20%] h-0.5 bg-gray-200 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-navy/5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <step.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Schritt {index + 1}: {step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
