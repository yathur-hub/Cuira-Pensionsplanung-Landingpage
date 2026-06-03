/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { AlertCircle, XCircle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    "Versteckte Provisionen bei Banken & Versicherungen",
    "Produkteverkauf statt echte Beratung",
    "Interessenskonflikte durch Retrozessionen",
    "Intransparente Kostenstrukturen"
  ];

  return (
    <section id="problem" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs">Der Status Quo</span>
            <h2 className="text-3xl md:text-5xl mt-6 mb-8 leading-tight">
              Warum klassische Bank-Beratung oft <span className="text-red-500 font-medium">zu teuer</span> ist.
            </h2>
            <p className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed">
              Die meisten Finanzberater verdienen am Verkauf von Produkten. Das bedeutet: Sie erhalten das Produkt, das dem Verkäufer die höchste Provision bringt – nicht das, was für Sie am sinnvollsten ist.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-bg-alt rounded-3xl border border-transparent hover:border-red-100 transition-all group/card"
              >
                <XCircle className="w-8 h-8 text-red-400 mb-4 group-hover/card:scale-110 transition-transform" />
                <h4 className="font-bold text-navy leading-snug">{problem}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
