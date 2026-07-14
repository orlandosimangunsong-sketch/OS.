import { motion } from 'motion/react';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-palette-1/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-palette-4 uppercase mb-3">
            Career Timeline
          </h2>
          <h3 className="text-3xl font-display font-bold text-palette-text">
            Professional Experience
          </h3>
        </div>

        <div className="relative border-l border-palette-3/30 ml-3 md:ml-0 md:border-l-0 md:after:content-[''] md:after:absolute md:after:top-0 md:after:bottom-0 md:after:left-1/2 md:after:-ml-px md:after:border-l md:after:border-palette-3/30">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 md:mb-24 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] md:left-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 w-10 h-10 rounded-full bg-palette-1 border-4 border-palette-2/50 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-palette-4" />
                </div>

                <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:ml-auto md:text-left' : 'md:pl-16 md:mr-auto md:text-right text-left'} pl-10 md:pl-0`}>
                  <div className={`bg-palette-1 p-6 rounded-2xl shadow-sm border border-palette-3/20 relative ${!isEven ? 'md:ml-0 md:mr-auto md:!text-right' : 'md:mr-0 md:ml-auto'}`}>
                     {/* Triangle pointer */}
                    <div className={`hidden md:block absolute top-5 w-4 h-4 bg-palette-1 border-palette-3/20 transform rotate-45 ${isEven ? '-left-2 border-l border-b' : '-right-2 border-r border-t'}`} />
                    
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-palette-2/30 text-palette-text mb-4">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-display font-bold text-palette-text mb-1">{exp.role}</h4>
                    <div className="flex items-center text-palette-text/70 mb-4 text-sm font-medium justify-start md:justify-start">
                      <Briefcase className={`w-4 h-4 mr-1 ${!isEven ? 'md:mr-0 md:ml-1 md:order-last' : ''}`} />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-palette-text/80 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
