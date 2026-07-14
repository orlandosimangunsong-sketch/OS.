import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-palette-1 border-t border-palette-3/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-palette-3/30">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-palette-text mb-2">Let's Connect</h2>
            <p className="text-palette-text/80 max-w-md">
              Interested in collaborating on a renewable energy project? Feel free to reach out.
            </p>
          </div>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-palette-bg-dark bg-palette-4 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,162,57,0.4)] hover:shadow-[0_0_25px_rgba(255,162,57,0.6)]"
          >
            <Mail className="w-5 h-5 mr-2" />
            {personalInfo.email}
          </a>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-palette-text/70">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 text-palette-text/70 hover:text-palette-4 hover:bg-palette-4/10 rounded-full transition-all hover:scale-110 shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
