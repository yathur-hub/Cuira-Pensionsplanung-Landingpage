/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, X, Shield, Info } from "lucide-react";
import { ComparisonCopy } from "../types";

export default function ComparisonSection({ copy }: { copy: ComparisonCopy }) {
  return (
    <section id="comparison" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              {copy.sectionTag}
            </span>
            <h2 className="text-4xl md:text-5xl mb-6">
              {copy.headline.split(' – ').map((part, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-accent underline decoration-accent/10 underline-offset-8">{part}</span> : part}
                  {i === 0 && copy.headline.includes(' – ') ? ' – ' : ''}
                </span>
              ))}
              {!copy.headline.includes(' – ') && (
                <span className="text-accent underline decoration-accent/10 underline-offset-8">
                  {copy.headline.split(' ').pop()}
                </span>
              )}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">{copy.intro}</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {copy.points.slice(0, 3).map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-bg-alt rounded-3xl border border-transparent hover:border-accent/10 transition-all group/point"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover/point:bg-accent group-hover/point:text-white transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold mb-3">{point.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-navy/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest font-mono opacity-50">Kriterium</th>
                    <th className="py-6 px-8 text-lg font-bold">Cuira Partners</th>
                    <th className="py-6 px-8 text-sm font-bold opacity-60">Banken</th>
                    <th className="py-6 px-8 text-sm font-bold opacity-60">Versicherungen</th>
                    <th className="py-6 px-8 text-sm font-bold opacity-60">Vermögensverwalter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {copy.table.map((row, index) => (
                    <tr key={index} className="hover:bg-bg-alt/50 transition-colors group/row">
                      <td className="py-5 px-8 font-semibold text-navy/80 text-sm">{row.label}</td>
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-2">
                          {typeof row.cuira === 'boolean' ? (
                            row.cuira ? 
                              <Check className="w-5 h-5 text-accent" /> : 
                              <X className="w-5 h-5 text-slate-200" />
                          ) : (
                            <span className="text-accent font-bold text-sm bg-accent/5 px-3 py-1 rounded-full">{row.cuira}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-8 text-slate-400 text-sm">
                        {typeof row.banks === 'boolean' ? (
                          row.banks ? <Check className="w-4 h-4 opacity-30" /> : <X className="w-4 h-4 opacity-20" />
                        ) : row.banks}
                      </td>
                      <td className="py-5 px-8 text-slate-400 text-sm">
                        {typeof row.insurance === 'boolean' ? (
                          row.insurance ? <Check className="w-4 h-4 opacity-30" /> : <X className="w-4 h-4 opacity-20" />
                        ) : row.insurance}
                      </td>
                      <td className="py-5 px-8 text-slate-400 text-sm">
                        {typeof row.wealth === 'boolean' ? (
                          row.wealth ? <Check className="w-4 h-4 opacity-30" /> : <X className="w-4 h-4 opacity-20" />
                        ) : row.wealth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 bg-navy rounded-[2.5rem] text-white">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Info className="w-5 h-5 text-accent" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-light">Kernargumentation</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3">{copy.argument}</h4>
            <p className="text-white/50 text-sm">{copy.closing}</p>
          </div>
          <motion.a
            href="https://calendly.com/kathir-cuira/erstgesprach"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-navy font-bold rounded-2xl hover:bg-accent hover:text-white transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-3 text-sm md:text-base"
          >
            <span className="truncate">{copy.ctaText}</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
