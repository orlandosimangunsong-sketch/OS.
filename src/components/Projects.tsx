import { motion } from 'motion/react';
import { projectCategories } from '../data';
import { FolderGit2, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-palette-4 uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-3xl font-display font-bold text-palette-text">
            Selected Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-palette-1/50 rounded-2xl p-8 border border-palette-3/20 hover:border-palette-3/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-palette-2/30 flex items-center justify-center mb-6 group-hover:bg-palette-2 transition-colors">
                <FolderGit2 className="w-6 h-6 text-palette-4 group-hover:text-palette-4 transition-colors" />
              </div>
              <h4 className="text-xl font-display font-bold text-palette-text mb-6 border-b border-palette-3/20 pb-4">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-palette-4 mr-3 shrink-0 mt-0.5" />
                    <span className="text-palette-text/80 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
