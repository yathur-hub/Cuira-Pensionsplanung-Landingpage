import { motion } from "motion/react";

export default function AboutUsSection() {
  const founders = [
    {
      name: "Kathirsan Kathirgamanathan",
      title: "Co-Founder",
      credentials: "MAS Digital Excellence for Financial Services, Finanzplaner mit eidg. FA & Finanzberater IAF",
      description: "Kathir ist das Gesicht im Vordergrund, das Menschen begeistert und verbindet. Als Co-Founder von Cuira verbindet er fundiertes Fachwissen mit dem natürlichen Talent, komplexe Themen einfach und verständlich zu machen."
    },
    {
      name: "Tiago Garcia",
      title: "Co-Founder",
      credentials: "MAS Digital Excellence for Financial Services, Finanzplaner mit eidg. FA & Finanzberater IAF",
      description: "Tiago ist der Stratege, der Visionen in greifbare Erfolge umsetzt. Als Co-Founder von Cuira kombiniert er Präzision und Kreativität, um komplexe Herausforderungen zu meistern und massgeschneiderte Lösungen zu entwickeln."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100/50">
              <img 
                src="https://cuirapartners.ch/wp-content/uploads/2025/07/2.png" 
                alt="Cuira Partners Co-Founders" 
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-navy/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-12 md:space-y-16">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-4 block">Über uns</span>
              <h2 className="text-3xl md:text-5xl font-serif text-navy leading-tight mb-8">
                Die Köpfe hinter <br className="hidden sm:block" />
                <span className="italic font-normal">Cuira Partners</span>
              </h2>
            </div>

            <div className="space-y-10 md:space-y-12">
              {founders.map((founder, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group text-center lg:text-left"
                >
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">{founder.name}</h3>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
                      <span className="text-accent font-bold text-[10px] md:text-xs uppercase tracking-widest">{founder.title}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
                      <span className="text-[9px] md:text-[10px] text-navy/40 uppercase font-bold tracking-wider">{founder.credentials}</span>
                    </div>
                  </div>
                  <p className="text-navy/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {founder.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            
          </div>

        </div>
      </div>
    </section>
  );
}
