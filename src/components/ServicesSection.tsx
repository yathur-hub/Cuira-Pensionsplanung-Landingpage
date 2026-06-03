/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Banknote, FileText, PieChart, TrendingUp, Landmark, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { icon: FileText, title: "Steueroptimierung", desc: "Reduktion der Steuerlast beim Kapitalbezug und während der Rente." },
    { icon: PieChart, title: "Liquiditätsplanung", desc: "Sicherstellung der finanziellen Freiheit over den gesamten Lebenszyklus." },
    { icon: Banknote, title: "Anlagestrategie", desc: "Wissenschaftlich fundierte Portfolios ohne unnötige Bankgebühren." },
    { icon: TrendingUp, title: "Vorsorge-Check", desc: "Detaillierte Analyse Ihrer AHV, BVG und privaten Vorsorge (3a)." },
    { icon: Landmark, title: "Immobilien & Hypotheken", desc: "Strategische Beratung zur Amortisation und Nachfolgeplanung." },
    { icon: Shield, title: "Nachlas-Schutz", desc: "Sicherstellung Ihres Erbes und finanzielle Absicherung des Partners." }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl leading-tight">Umfassende Expertise für Ihre <span className="text-accent underline decoration-accent/20 underline-offset-4">finanzielle Freiheit.</span></h2>
          </div>
          <div className="pb-2 text-center lg:text-left">
            <p className="text-gray-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">360° Beratung | 100% Unabhängig</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group/service"
            >
              <div className="w-14 h-14 bg-bg-alt rounded-2xl flex items-center justify-center mb-6 group-hover/service:bg-accent group-hover/service:text-white transition-all duration-500">
                <service.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-bold mb-3 font-sans tracking-tight">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
