import { motion } from 'motion/react';
import { projectCategories } from '../data';
import { FolderGit2, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-48 bg-palette-2/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-sm font-bold tracking-widest text-palette-4 uppercase mb-3 relative z-10 drop-shadow-sm">
            Portfolio
          </h2>
          <h3 className="text-4xl font-display font-black text-palette-text relative z-10">
            Selected Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-palette-3/20 shadow-lg hover:shadow-2xl hover:shadow-palette-3/30 hover:border-palette-3/60 transition-all duration-300 group overflow-hidden relative"
            >
              {/* Decorative background glow on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-palette-4/20 to-palette-3/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-palette-3/40 to-palette-2/30 flex items-center justify-center mb-8 group-hover:from-palette-4 group-hover:to-palette-4/80 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-white/20 relative z-10">
                <FolderGit2 className="w-7 h-7 text-palette-text group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-display font-black text-palette-text mb-6 border-b-2 border-palette-3/20 pb-4 relative z-10">
                {category.title}
              </h4>
              <ul className="space-y-4 relative z-10">
                {category.items.map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-palette-4 mr-3 shrink-0 mt-0.5 drop-shadow-sm" />
                    <span className="text-palette-text-light font-medium leading-relaxed text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
