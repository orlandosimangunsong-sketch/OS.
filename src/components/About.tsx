import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { BatteryCharging, Sun, Activity } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Sun, label: 'Solar PV', value: '13+ Yrs' },
    { icon: BatteryCharging, label: 'BESS', value: 'Expert' },
    { icon: Activity, label: 'Off-Grid', value: 'Mega-Scale' },
  ];

  return (
    <section id="about" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-palette-4 uppercase mb-3">
              Professional Summary
            </h2>
            <p className="text-3xl font-display font-medium text-palette-text leading-tight mb-6">
              Driving the transition to sustainable energy through engineered precision.
            </p>
            <p className="text-lg text-palette-text/80 leading-relaxed mb-8">
              {personalInfo.summary}
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-palette-3/20">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-palette-2/30 flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-palette-4" />
                  </div>
                  <span className="text-2xl font-display font-bold text-palette-text">{stat.value}</span>
                  <span className="text-sm text-palette-text/70 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden bg-palette-2/10 aspect-[4/3] group">
              {/* Optional: Add a real image here later. For now, an aesthetic placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-palette-4 to-palette-text" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
                 <Sun className="w-24 h-24 mb-4 opacity-50 group-hover:scale-110 group-hover:text-palette-2 transition-all duration-700" />
                 <span className="font-display tracking-widest uppercase text-sm">Engineering the Future</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
