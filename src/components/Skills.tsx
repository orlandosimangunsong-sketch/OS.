import { motion } from 'motion/react';
import { skills } from '../data';
import { Cpu, Terminal, Zap } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-palette-bg-dark text-palette-1 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-palette-4/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-palette-3/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-palette-4 uppercase mb-3 drop-shadow-sm">
                Expertise
              </h2>
              <h3 className="text-4xl font-display font-black mb-6 text-palette-1 drop-shadow-md">
                Technical Skills & Projects
              </h3>
              <p className="text-palette-1/90 font-medium leading-relaxed mb-8 border-l-4 border-palette-3/50 pl-4">
                Combining deep theoretical knowledge with practical field experience and modern computational tools to deliver optimal energy solutions.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {skills.personalProjects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, type: "spring" }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-palette-3/20 hover:border-palette-4/50 hover:bg-white/10 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-palette-4/20 rounded-lg mr-3">
                      <Terminal className="w-5 h-5 text-palette-4" />
                    </div>
                    <h4 className="font-bold text-palette-1 text-lg">{project.title}</h4>
                  </div>
                  <p className="text-sm text-palette-1/80 pl-12 leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-palette-3/20 shadow-2xl relative overflow-hidden"
            >
              {/* Inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-palette-3/10 to-transparent pointer-events-none" />

              <div className="flex items-center mb-8 pb-6 border-b border-palette-3/20 relative z-10">
                <div className="p-3 bg-palette-3/20 rounded-xl mr-4 border border-palette-3/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Cpu className="w-7 h-7 text-palette-4" />
                </div>
                <h4 className="text-2xl font-display font-black text-palette-1 tracking-wide">Core Competencies</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {skills.coreCompetencies.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(168, 187, 163, 0.2)" }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-palette-bg-dark/50 border border-palette-3/20 hover:border-palette-4/50 transition-all duration-300 shadow-sm cursor-default"
                  >
                    <Zap className="w-5 h-5 text-palette-4 shrink-0 drop-shadow-[0_0_5px_rgba(255,162,57,0.5)]" />
                    <span className="text-sm font-bold tracking-wide text-palette-1">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
