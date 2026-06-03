import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  ArrowRight, 
  ChevronRight, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  Info
} from 'lucide-react';

// --- Types ---

type Gender = 'Mann' | 'Frau';
type CivilStatus = 'Ledig' | 'Verheiratet' | 'Geschieden' | 'Verwitwet';
type Kanton = 'Zürich' | 'Bern' | 'Luzern' | 'Uri' | 'Schwyz' | 'Obwalden' | 'Nidwalden' | 'Glarus' | 'Zug' | 'Freiburg' | 'Solothurn' | 'Basel-Stadt' | 'Basel-Landschaft' | 'Schaffhausen' | 'Appenzell Innerrhoden' | 'Appenzell Ausserrhoden' | 'St. Gallen' | 'Graubünden' | 'Aargau' | 'Thurgau' | 'Tessin' | 'Waadt' | 'Wallis' | 'Neuenburg' | 'Genf' | 'Jura';

interface PensionData {
  age: number;
  gender: Gender;
  kanton: Kanton;
  civilStatus: CivilStatus;
  annualIncome: number;
  retirementAge: number;
  pkBalance: number;
  s3aBalance: number;
  freeAssets: number;
  hasHome: boolean;
}

interface CalculationResults {
  ahvMonthly: number;
  pkMonthly: number;
  s3aFinalCapital: number;
  totalMonthlyIncome: number;
  incomeGap: number;
  targetIncome: number;
  recommendations: string[];
}

// --- Constants ---

const KANTONE: Kanton[] = [
  'Zürich', 'Bern', 'Luzern', 'Uri', 'Schwyz', 'Obwalden', 'Nidwalden', 'Glarus', 'Zug', 'Freiburg', 'Solothurn', 'Basel-Stadt', 'Basel-Landschaft', 'Schaffhausen', 'Appenzell Innerrhoden', 'Appenzell Ausserrhoden', 'St. Gallen', 'Graubünden', 'Aargau', 'Thurgau', 'Tessin', 'Waadt', 'Wallis', 'Neuenburg', 'Genf', 'Jura'
];

const STANDARD_ASSUMPTIONS = {
  pkInterest: 0.02,
  s3aReturn: 0.04,
  inflation: 0.015,
  targetRatio: 0.8,
  ahvMaxSingle: 2450,
  ahvMaxCouple: 3675,
  pkConversionRate: 0.055,
  s3aMaxAnnual: 7056,
};

// --- Component ---

export default function PensionCalculator() {
  const [formData, setFormData] = useState<PensionData>({
    age: 40,
    gender: 'Mann',
    kanton: 'Zürich',
    civilStatus: 'Ledig',
    annualIncome: 100000,
    retirementAge: 65,
    pkBalance: 150000,
    s3aBalance: 30000,
    freeAssets: 50000,
    hasHome: false,
  });

  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const results = useMemo(() => {
    const yearsToRetirement = Math.max(0, formData.retirementAge - formData.age);
    
    // 1. AHV Estimation
    let ahvMonthly = 0;
    if (formData.civilStatus === 'Verheiratet') {
      ahvMonthly = STANDARD_ASSUMPTIONS.ahvMaxCouple / 2; // Per person roughly
    } else {
      ahvMonthly = STANDARD_ASSUMPTIONS.ahvMaxSingle;
    }
    // Scale if income is low (simplified)
    if (formData.annualIncome < 88200) {
      ahvMonthly *= (0.8 + (formData.annualIncome / 88200) * 0.2);
    }

    // 2. PK Projection
    // Assume 18% contribution (employer + employee) on coordination income
    const coordinatedIncome = Math.max(0, formData.annualIncome - 25725);
    const annualPkContribution = coordinatedIncome * 0.18;
    
    // Future value of current balance
    const fvCurrentPk = formData.pkBalance * Math.pow(1 + STANDARD_ASSUMPTIONS.pkInterest, yearsToRetirement);
    
    // Future value of contributions (annuity)
    const fvContributionsPk = yearsToRetirement > 0 
      ? annualPkContribution * (Math.pow(1 + STANDARD_ASSUMPTIONS.pkInterest, yearsToRetirement) - 1) / STANDARD_ASSUMPTIONS.pkInterest 
      : 0;
    
    const totalPkCapital = fvCurrentPk + fvContributionsPk;
    const pkMonthly = (totalPkCapital * STANDARD_ASSUMPTIONS.pkConversionRate) / 12;

    // 3. Säule 3a Projection
    // Assume half of max contribution for simplicity if not specified
    const annualS3aContribution = 7056; 
    const fvCurrent3a = formData.s3aBalance * Math.pow(1 + STANDARD_ASSUMPTIONS.s3aReturn, yearsToRetirement);
    const fvContributions3a = yearsToRetirement > 0
      ? annualS3aContribution * (Math.pow(1 + STANDARD_ASSUMPTIONS.s3aReturn, yearsToRetirement) - 1) / STANDARD_ASSUMPTIONS.s3aReturn
      : 0;
    
    const s3aFinalCapital = fvCurrent3a + fvContributions3a;
    // Sustainable withdrawal (3% per year simplified)
    const s3aMonthly = (s3aFinalCapital * 0.04) / 12;

    // 4. Totals
    const targetIncome = (formData.annualIncome * STANDARD_ASSUMPTIONS.targetRatio) / 12;
    const totalMonthlyIncome = ahvMonthly + pkMonthly + s3aMonthly;
    const incomeGap = Math.max(0, targetIncome - totalMonthlyIncome);

    // 5. Recommendations
    const recs = [];
    if (incomeGap > 500) recs.push('Maximale Einzahlung in Säule 3a priorisieren');
    if (formData.pkBalance < formData.annualIncome * 2) recs.push('Freiwilliger Einkauf in Pensionskasse zur Steuer- und Rentenoptimierung prüfen');
    if (!formData.hasHome && formData.freeAssets > 100000) recs.push('Immobilie als Baustein der Altersvorsorge in Betracht ziehen');
    if (yearsToRetirement > 15) recs.push('Anlagestrategie der Säule 3a auf höheren Aktienanteil prüfen');
    if (incomeGap > 1000) recs.push('Sparquote im freien Vermögen um 5-10% erhöhen');
    if (formData.retirementAge < 65) recs.push('Effekte einer gestaffelten Pensionierung analysieren');

    return {
      ahvMonthly,
      pkMonthly,
      s3aFinalCapital,
      totalMonthlyIncome,
      incomeGap,
      targetIncome,
      recommendations: recs.slice(0, 3)
    } as CalculationResults;
  }, [formData]);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
      document.getElementById('pension-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <section id="pension-calculator" className="py-24 bg-bg-alt/30 select-none overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="text-center mb-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            <Calculator className="w-3 h-3" />
            Vorsorge-Check
          </motion.div>
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-4xl md:text-5xl lg:text-6xl text-navy mb-6 max-w-4xl mx-auto"
          >
            Wie gut sind Sie für die <span className="text-accent italic font-normal">Pension vorbereitet?</span>
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-lg md:text-xl text-navy/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Berechnen Sie in weniger als 60 Sekunden Ihre voraussichtliche finanzielle Situation im Ruhestand.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
              }
            }
          }}
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Input Form */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-navy/5 border border-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Basic Info Group */}
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-navy/30 border-b border-navy/5 pb-4 mb-6">Persönliche Angaben</h3>
                
                <div>
                  <label className="metadata-label">Aktuelles Alter</label>
                  <input 
                    type="number" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="metadata-label">Geschlecht</label>
                  <div className="flex gap-2">
                    {(['Mann', 'Frau'] as Gender[]).map((g) => (
                      <button
                        key={g}
                        onClick={() => setFormData({...formData, gender: g})}
                        className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${formData.gender === g ? 'bg-navy text-white shadow-lg' : 'bg-bg-alt/50 text-navy/40 hover:bg-bg-alt'}`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="metadata-label">Wohnkanton</label>
                  <select 
                    value={formData.kanton}
                    onChange={(e) => setFormData({...formData, kanton: e.target.value as Kanton})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                  >
                    {KANTONE.map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>

                <div>
                  <label className="metadata-label">Zivilstand</label>
                  <select 
                    value={formData.civilStatus}
                    onChange={(e) => setFormData({...formData, civilStatus: e.target.value as CivilStatus})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                  >
                    {['Ledig', 'Verheiratet', 'Geschieden', 'Verwitwet'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="metadata-label">Geplantes Pensionierungsalter</label>
                  <input 
                    type="number" 
                    value={formData.retirementAge}
                    onChange={(e) => setFormData({...formData, retirementAge: Number(e.target.value)})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              {/* Financial Info Group */}
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-navy/30 border-b border-navy/5 pb-4 mb-6">Finanzielle Situation</h3>
                
                <div>
                  <label className="metadata-label">Bruttojahreseinkommen (CHF)</label>
                  <input 
                    type="number" 
                    value={formData.annualIncome}
                    onChange={(e) => setFormData({...formData, annualIncome: Number(e.target.value)})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="metadata-label">Pensionskassen-Guthaben (CHF)</label>
                  <input 
                    type="number" 
                    value={formData.pkBalance}
                    onChange={(e) => setFormData({...formData, pkBalance: Number(e.target.value)})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="metadata-label">Säule-3a-Guthaben (CHF)</label>
                  <input 
                    type="number" 
                    value={formData.s3aBalance}
                    onChange={(e) => setFormData({...formData, s3aBalance: Number(e.target.value)})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="metadata-label">Freies Vermögen (CHF)</label>
                  <input 
                    type="number" 
                    value={formData.freeAssets}
                    onChange={(e) => setFormData({...formData, freeAssets: Number(e.target.value)})}
                    className="w-full bg-bg-alt/50 border border-navy/5 rounded-xl px-4 py-3 text-navy font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="metadata-label">Eigenheim</label>
                  <div className="flex gap-2">
                    {([true, false]).map((val) => (
                      <button
                        key={String(val)}
                        onClick={() => setFormData({...formData, hasHome: val})}
                        className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${formData.hasHome === val ? 'bg-navy text-white shadow-lg' : 'bg-bg-alt/50 text-navy/40 hover:bg-bg-alt'}`}
                      >
                        {val ? 'Ja' : 'Nein'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalculate}
              disabled={isCalculating}
              className="w-full mt-12 py-5 bg-navy text-white hover:bg-accent rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-navy/20 disabled:opacity-50"
            >
              {isCalculating ? (
                <>Berechnung läuft...</>
              ) : (
                <>
                  Pensionsprognose berechnen
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>

          {/* Side Context / Illustrations */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-navy rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <ShieldCheck className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-2xl mb-4 leading-tight">Warum Ihre Pensionsplanung <span className="text-accent italic">jetzt</span> zählt.</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-8">
                Die Schweizer Vorsorgelandschaft verändert sich. Wer heute strategisch plant, kann Steuerersparnisse im fünfstelligen Bereich realisieren und die Rentenlücke effektiv schliessen.
              </p>
              <ul className="space-y-4">
                {[
                  'Unabhängige Honorarberatung',
                  'Optimierung aller 3 Säulen',
                  'Kostenersparnis durch Steuerplanung'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-navy/5 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-navy font-bold text-sm">Konservative Prognose</h4>
                  <p className="text-navy/40 text-[10px] uppercase tracking-widest font-bold">Standardannahmen (BVG 2%)</p>
                </div>
              </div>
              <p className="text-navy/60 text-xs leading-relaxed">
                Unsere Berechnung basiert auf konservativen Standardannahmen der Schweizer Vorsorgeeinrichtungen, um Ihnen eine realistische Grundlage für Ihre Planung zu bieten.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              id="pension-results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20 scroll-mt-24"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 border border-navy/5">
                <div className="bg-navy p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent pointer-events-none" />
                  <h3 className="text-3xl md:text-4xl text-white font-serif mb-4 relative z-10">Ihre Pensionsprognose</h3>
                  <div className="w-20 h-1 bg-accent mx-auto rounded-full relative z-10" />
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Primary Results */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                      <ResultItem 
                        label="Geschätzte AHV-Rente" 
                        value={results.ahvMonthly} 
                        unit="pro Monat" 
                        icon={<PieChart className="w-5 h-5" />}
                      />
                      <ResultItem 
                        label="Geschätzte PK-Rente" 
                        value={results.pkMonthly} 
                        unit="pro Monat" 
                        icon={<TrendingUp className="w-5 h-5" />}
                      />
                      <ResultItem 
                        label="Prognostiziertes 3a-Kapital" 
                        value={results.s3aFinalCapital} 
                        unit="bei Pensionierung" 
                        icon={<Calculator className="w-5 h-5" />}
                      />
                      <ResultItem 
                        label="Gesamteinkommen (geschätzt)" 
                        value={results.totalMonthlyIncome} 
                        unit="pro Monat" 
                        highlight
                        icon={<CheckCircle2 className="w-5 h-5" />}
                      />
                    </div>

                    {/* Gap Highlight */}
                    <div className="bg-bg-alt/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 border-accent/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <AlertCircle className="w-32 h-32" />
                      </div>
                      <span className="metadata-label mb-4">Geschätzte Rentenlücke</span>
                      <div className="text-4xl lg:text-5xl font-bold text-accent font-serif mb-2">
                        CHF {results.incomeGap.toLocaleString('fr-CH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </div>
                      <span className="text-navy/40 text-xs font-bold uppercase tracking-widest">monatlich</span>
                      
                      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-navy/60 bg-white/50 px-4 py-2 rounded-full border border-navy/5">
                        <Info className="w-3 h-3 text-accent" />
                        Basis: {STANDARD_ASSUMPTIONS.targetRatio * 100}% Lebensstandard
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mt-16 pt-12 border-t border-navy/5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-navy/30 mb-8">Individuelle Empfehlungen</h4>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {results.recommendations.map((rec, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-4 p-5 bg-bg-alt/30 rounded-2xl border border-navy/5"
                        >
                          <div className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent text-xs font-bold border border-navy/5">
                            {i + 1}
                          </div>
                          <p className="text-sm text-navy/80 font-medium leading-relaxed">{rec}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lead Magnet CTA */}
                <div className="bg-accent/5 p-8 md:p-12 border-t border-accent/10">
                  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl md:text-3xl text-navy mb-4">Nutzen Sie Ihr volles <span className="text-accent italic">Pensionspotenzial</span></h4>
                      <p className="text-navy/60 text-sm md:text-base font-light leading-relaxed">
                        Eine detaillierte Analyse zeigt oft zusätzliche Optimierungsmöglichkeiten bei AHV, Pensionskasse, Säule 3a und Steuern.
                      </p>
                    </div>
                    <a 
                      href="https://calendly.com/kathir-cuira/erstgesprach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-10 py-5 bg-accent text-white hover:bg-navy rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-accent/20"
                    >
                      Kostenlose persönliche Pensionsanalyse anfordern
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ResultItem({ label, value, unit, icon, highlight = false }: { label: string, value: number, unit: string, icon: React.ReactNode, highlight?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border ${highlight ? 'bg-navy text-white border-navy shadow-xl' : 'bg-white border-navy/5 shadow-sm'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-xl ${highlight ? 'bg-accent/20 text-accent' : 'bg-bg-alt text-accent'}`}>
          {icon}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${highlight ? 'text-white/40' : 'text-navy/30'}`}>{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-bold font-serif ${highlight ? 'text-white' : 'text-navy'}`}>
          CHF {value.toLocaleString('fr-CH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </span>
        <span className={`text-[10px] font-medium ${highlight ? 'text-white/40' : 'text-navy/40'}`}>{unit}</span>
      </div>
    </div>
  );
}
