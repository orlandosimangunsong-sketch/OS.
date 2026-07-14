import { motion } from 'motion/react';
import { Linkedin, Youtube, Video, ArrowRight, Zap } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-palette-4 text-palette-1">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-palette-3/30 blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-palette-2/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-6"
          >
            <Zap className="w-5 h-5 text-palette-2" />
            <span className="text-palette-2 font-medium tracking-wide uppercase text-sm">
              Electrical Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-palette-1/80 font-light leading-relaxed mb-10"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-palette-4 bg-palette-2 hover:bg-palette-3 transition-colors"
            >
              Contact Me
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-palette-3/50 hover:border-palette-1 text-base font-medium rounded-lg text-palette-1 bg-transparent transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            
            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-palette-3/50 hover:border-palette-1 text-base font-medium rounded-lg text-palette-1 bg-transparent transition-colors"
            >
              <Youtube className="w-5 h-5 mr-2" />
              PVsyst Tutorials
            </a>

            <a
              href={personalInfo.socials.videoPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-palette-3/50 hover:border-palette-1 text-base font-medium rounded-lg text-palette-1 bg-transparent transition-colors"
            >
              <Video className="w-5 h-5 mr-2" />
              Video Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
