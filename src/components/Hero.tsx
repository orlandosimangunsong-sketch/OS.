import { motion } from 'motion/react';
import { Linkedin, Youtube, Video, ArrowRight, Zap } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-palette-bg-dark text-palette-1 min-h-screen flex items-center">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-palette-3/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-palette-2/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-palette-4/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Zap className="w-6 h-6 text-palette-4 drop-shadow-[0_0_10px_rgba(255,162,57,0.5)]" />
            </motion.div>
            <span className="text-palette-4 font-bold tracking-widest uppercase text-sm drop-shadow-sm">
              Electrical Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-6 bg-gradient-brand text-gradient drop-shadow-lg"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-palette-1/90 font-light leading-relaxed mb-10 border-l-4 border-palette-4 pl-4"
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
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-palette-bg-dark bg-palette-4 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,162,57,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative flex items-center">
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 border-2 border-palette-3/50 hover:border-palette-3 text-base font-bold rounded-xl text-palette-1 bg-transparent transition-all hover:bg-palette-3/10 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            
            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 border-2 border-palette-3/50 hover:border-palette-3 text-base font-bold rounded-xl text-palette-1 bg-transparent transition-all hover:bg-palette-3/10 hover:scale-105"
            >
              <Youtube className="w-5 h-5 mr-2" />
              PVsyst Tutorials
            </a>

            <a
              href={personalInfo.socials.videoPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 border-2 border-palette-3/50 hover:border-palette-3 text-base font-bold rounded-xl text-palette-1 bg-transparent transition-all hover:bg-palette-3/10 hover:scale-105"
            >
              <Video className="w-5 h-5 mr-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              Video Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
