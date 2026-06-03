/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, X, Shield, Info } from "lucide-react";
import { ComparisonCopy } from "../types";

const renderValue = (val: string | boolean, isCuira = false, isMobile = false) => {
  if (typeof val === 'boolean') {
    if (val) {
      return <Check className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ${isCuira ? 'text-accent' : 'opacity-30'}`} />;
    }
    return <X className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ${isCuira ? 'text-slate-200' : 'opacity-20'}`} />;
  }
  return (
    <span className={`${isCuira ? 'text-accent bg-accent/5' : 'text-slate-400'} font-bold text-[10px] md:text-sm px-2 md:px-3 py-1 rounded-full whitespace-nowrap`}>
      {val}
    </span>
  );
};

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
          {/* Desktop Table - Hidden on Mobile */}
          <div className="hidden lg:block bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-navy/5 overflow-hidden">
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
                          {renderValue(row.cuira, true)}
                        </div>
                      </td>
                      <td className="py-5 px-8 text-slate-400 text-sm">
                        {renderValue(row.banks)}
                      </td>
                      <td className="py-5 px-8 text-slate-400 text-sm">
                        {renderValue(row.insurance)}
                      </td>
                      <td className="py-5 px-8 text-slate-400 text-sm">
                        {renderValue(row.wealth)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards - Shown only on Mobile */}
          <div className="lg:hidden space-y-4">
            {copy.table.map((row, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5"
              >
                <h4 className="text-navy font-bold text-base mb-4 pb-3 border-b border-slate-50">{row.label}</h4>
                
                <div className="space-y-4">
                  {/* Cuira partners row */}
                  <div className="flex items-center justify-between bg-accent/5 p-3 rounded-xl border border-accent/10">
                    <span className="text-xs font-bold text-navy">Cuira Partners</span>
                    <div className="flex items-center gap-2">
                       {renderValue(row.cuira, true)}
                    </div>
                  </div>

                  {/* Others row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Banken</span>
                      <div className="text-xs text-slate-600 font-medium">{renderValue(row.banks, false, true)}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Versich.</span>
                      <div className="text-xs text-slate-600 font-medium">{renderValue(row.insurance, false, true)}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Vermögen</span>
                      <div className="text-xs text-slate-600 font-medium">{renderValue(row.wealth, false, true)}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 bg-navy rounded-[2.5rem] text-white">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Info className="w-5 h-5 text-accent" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-light">Warum Cuira</span>
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
