/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Award, Handshake, Globe } from "lucide-react";

export default function TrustSection() {
  const trustElements = [
    { icon: ShieldCheck, label: "Eidgenössisch diplomierte Finanzplaner" },
    { icon: Award, label: "Honorarberater Verband" },
    { icon: Handshake, label: "100% Unabhängig" },
    { icon: Globe, label: "Schweizer Expertise" }
  ];

  return (
    <section className="py-20 bg-bg-alt relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-80">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold font-sans text-navy/40 uppercase tracking-tighter mb-4">
              Vertrauen durch <br />Transparenz.
            </h3>
            <div className="space-y-1">
              <p className="text-accent font-bold uppercase tracking-widest text-[9px]">
                Keine Provisionen. Keine Produktvorgaben.
              </p>
              <p className="text-navy/40 font-bold uppercase tracking-widest text-[9px]">
                Keine Interessenkonflikte.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-8 md:gap-4">
            {trustElements.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-navy/60 grayscale hover:grayscale-0 transition-all cursor-default"
              >
                <item.icon className="w-6 h-6 stroke-[1.5]" />
                <span className="font-semibold text-sm tracking-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
