import { motion } from 'motion/react';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-palette-1/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-32 bg-palette-3/20 rounded-full blur-2xl" />
          <h2 className="text-sm font-bold tracking-widest text-palette-4 uppercase mb-3 relative z-10 drop-shadow-sm">
            Career Timeline
          </h2>
          <h3 className="text-4xl font-display font-black text-palette-text relative z-10">
            Professional Experience
          </h3>
        </div>

        <div className="relative border-l-2 border-palette-3/30 ml-3 md:ml-0 md:border-l-0 md:after:content-[''] md:after:absolute md:after:top-0 md:after:bottom-0 md:after:left-1/2 md:after:-ml-px md:after:border-l-2 md:after:border-palette-3/30 md:after:border-dashed">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                className="relative mb-12 md:mb-24 last:mb-0 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] md:left-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 w-10 h-10 rounded-full bg-palette-1 border-4 border-palette-3 group-hover:border-palette-4 transition-colors duration-300 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,187,163,0.5)] group-hover:shadow-[0_0_20px_rgba(255,162,57,0.5)]">
                  <div className="w-3 h-3 rounded-full bg-palette-text group-hover:bg-palette-4 transition-colors duration-300" />
                </div>

                <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:ml-auto md:text-left' : 'md:pl-16 md:mr-auto md:text-right text-left'} pl-10 md:pl-0`}>
                  <div className={`bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-palette-3/20 border border-palette-3/20 relative transition-all duration-300 group-hover:-translate-y-1 ${!isEven ? 'md:ml-0 md:mr-auto md:!text-right' : 'md:mr-0 md:ml-auto'}`}>
                     {/* Triangle pointer */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-palette-3/20 transform rotate-45 transition-colors duration-300 ${isEven ? '-left-2 border-l border-b' : '-right-2 border-r border-t'}`} />
                    
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-palette-3/20 to-palette-2/20 text-palette-text mb-5 border border-palette-3/30 shadow-sm">
                      {exp.period}
                    </span>
                    <h4 className="text-2xl font-display font-black text-palette-text mb-2 group-hover:text-palette-4 transition-colors">{exp.role}</h4>
                    <div className="flex items-center text-palette-text-light/80 mb-5 text-sm font-semibold justify-start md:justify-start">
                      <Briefcase className={`w-4 h-4 mr-1.5 text-palette-3 ${!isEven ? 'md:mr-0 md:ml-1.5 md:order-last' : ''}`} />
                      <span>{exp.company} &bull; {exp.location}</span>
                    </div>
                    <p className="text-palette-text-light/90 leading-relaxed text-sm md:text-base">
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
