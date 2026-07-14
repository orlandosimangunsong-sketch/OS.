import { motion } from 'motion/react';
import { skills } from '../data';
import { Cpu, Terminal, Zap } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-palette-4 text-palette-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <h2 className="text-sm font-bold tracking-widest text-palette-1/80 uppercase mb-3">
              Expertise
            </h2>
            <h3 className="text-3xl font-display font-bold mb-6">
              Technical Skills & Projects
            </h3>
            <p className="text-palette-1/80 leading-relaxed mb-8">
              Combining deep theoretical knowledge with practical field experience and modern computational tools to deliver optimal energy solutions.
            </p>
            
            <div className="space-y-6">
              {skills.personalProjects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-palette-3/30 rounded-xl p-5 border border-palette-3/50"
                >
                  <div className="flex items-center mb-2">
                    <Terminal className="w-5 h-5 text-palette-2 mr-2" />
                    <h4 className="font-medium text-white">{project.title}</h4>
                  </div>
                  <p className="text-sm text-palette-1/80 pl-7">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-palette-3/30 rounded-2xl p-8 border border-palette-3/50">
              <div className="flex items-center mb-8 pb-4 border-b border-palette-3/50">
                <Cpu className="w-6 h-6 text-palette-2 mr-3" />
                <h4 className="text-xl font-display font-semibold">Core Competencies</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.coreCompetencies.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-palette-4/50 border border-palette-3/30 hover:border-palette-1/50 transition-colors"
                  >
                    <Zap className="w-4 h-4 text-palette-2 shrink-0" />
                    <span className="text-sm font-medium text-palette-1">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
