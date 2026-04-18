/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Twitter, 
  Mail, 
  Code2, 
  Terminal, 
  Blocks, 
  ChevronRight,
  Cpu,
  ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TelegramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.22-5.46 3.62-.52.35-.98.53-1.39.52-.45-.01-1.32-.26-1.97-.47-.8-.26-1.43-.4-1.38-.85.03-.23.33-.47.93-.73 3.65-1.59 6.09-2.64 7.32-3.15 3.48-1.44 4.2-1.69 4.67-1.7.1.01.33.03.48.15.12.1.16.23.18.33.02.1.03.28.02.43z"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b-0 border-white/5 py-4 px-6 mb-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold font-mono tracking-tighter"
          >
            JEFF<span className="text-brand-primary">.DEV</span>
          </motion.div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 space-y-32 mb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-1 rounded-full bg-gradient-to-r from-brand-primary/50 to-brand-secondary/50 relative"
          >
            <div className="bg-slate-950 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border-2 border-brand-primary/30 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative">
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-gradient leading-none">JEFF</span>
              
              {/* Telegram Verified Badge attached to the placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1.5 rounded-full border-4 border-slate-950 flex items-center justify-center group cursor-pointer shadow-lg z-10"
                title="Verified Telegram: @ItsMeJeff"
              >
                <TelegramIcon size={14} />
                <div className="absolute left-full ml-3 glass px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  @ItsMeJeff
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Jeff</span>
          </motion.h1>
          
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl"
          >
            A 15-year old developer building cool things with 
            <span className="text-white font-mono mx-2">Python</span> 
            and 
            <span className="text-white font-mono mx-2">React</span>.
          </motion.p>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <a 
              href="https://t.me/ItsMeJeff" 
              className="px-8 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-full transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon size={20} /> Message Me
            </a>
            <a 
              href="https://t.me/txtfilegenerator" 
              className="px-8 py-3 glass hover:bg-white/10 text-white font-semibold rounded-full transition-all flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon size={20} /> Official Channel
            </a>
          </motion.div>
        </section>

        {/* Identity & About */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-md bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
              My Journey
            </div>
            <h2 className="text-4xl font-bold tracking-tight">From Josh to Jeff.</h2>
            <p className="text-slate-400 leading-relaxed text-lg text-balance">
              They used to call me <span className="text-white font-semibold italic">Josh</span> before, but now I'm established as <span className="text-brand-primary font-bold">Jeff</span>. 
              I started coding because I wanted to understand how things work behind the screen. 
              At 15, I spend most of my time exploring the limits of automation and reactive interfaces.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              <div className="p-4 glass rounded-2xl">
                <div className="text-brand-secondary font-mono text-3xl font-bold mb-1">15</div>
                <div className="text-xs text-slate-500 uppercase tracking-tighter font-semibold">Years Old</div>
              </div>
              <div className="p-4 glass rounded-2xl">
                <div className="text-brand-primary font-mono text-3xl font-bold mb-1">2+</div>
                <div className="text-xs text-slate-500 uppercase tracking-tighter font-semibold">Years Coding</div>
              </div>
              <div className="p-4 glass rounded-2xl border-blue-500/20 col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                  <TelegramIcon size={20} />
                  <span className="font-mono text-lg truncate">@ItsMeJeff</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-blue-500/80 font-bold uppercase tracking-widest">
                  <ShieldCheck size={12} /> Verified Identity
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <Code2 size={120} className="text-brand-primary/20 transition-transform group-hover:scale-110 duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                  <div className="font-mono text-xs text-brand-secondary mb-2 uppercase tracking-widest font-bold">current_focus.py</div>
                  <div className="text-sm text-slate-300 italic font-mono">
                    "Building the future, one line at a time."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Coding Skills</h2>
            <p className="text-slate-400">My technical stack and proficiency</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skill Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-3xl space-y-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Python</h3>
                    <p className="text-sm text-slate-500 font-medium">Backend & Automation</p>
                  </div>
                </div>
                <div className="text-2xl font-bold font-mono text-yellow-500">80%</div>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                />
              </div>
              <ul className="text-slate-400 text-sm grid grid-cols-2 gap-2 font-mono">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-yellow-500 rounded-full"/> Scripting</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-yellow-500 rounded-full"/> Data Processing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-yellow-500 rounded-full"/> Automation</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-yellow-500 rounded-full"/> Web Scraping</li>
              </ul>
            </motion.div>

            {/* Skill Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-3xl space-y-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sky-500/10 text-sky-500 rounded-xl">
                    <Blocks size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">React</h3>
                    <p className="text-sm text-slate-500 font-medium">Frontend Development</p>
                  </div>
                </div>
                <div className="text-2xl font-bold font-mono text-sky-500">45%</div>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "45%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-sky-500 to-cyan-500"
                />
              </div>
              <ul className="text-slate-400 text-sm grid grid-cols-2 gap-2 font-mono">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sky-500 rounded-full"/> Components</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sky-500 rounded-full"/> Hooks</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sky-500 rounded-full"/> Tailwind CSS</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sky-500 rounded-full"/> State Mgmt</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Footer / Connect */}
        <footer className="pt-24 border-t border-white/5 pb-24 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="text-2xl font-bold font-mono tracking-tighter">JEFF<span className="text-brand-primary">.DEV</span></div>
              <p className="text-slate-500 max-w-sm">
                Built with precision by Jeff. 15 years young, forever learning.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a href="#" className="p-4 glass rounded-full hover:bg-white/10 transition-all text-slate-400 hover:text-brand-primary">
                <Github size={24} />
              </a>
              <a href="https://t.me/ItsMeJeff" className="p-4 glass rounded-full hover:bg-white/10 transition-all text-slate-400 hover:text-brand-primary" title="Personal Telegram">
                <TelegramIcon size={24} />
              </a>
              <a href="https://t.me/txtfilegenerator" className="p-4 glass rounded-full hover:bg-white/10 transition-all text-slate-400 hover:text-brand-primary" title="Official Channel">
                <div className="relative">
                  <TelegramIcon size={24} />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-primary rounded-full border-2 border-slate-950" />
                </div>
              </a>
              <a href="mailto:jeff@example.com" className="p-4 glass rounded-full hover:bg-white/10 transition-all text-slate-400 hover:text-brand-primary">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono italic">
            <div>© 2026 Jeff (Formerly Josh). All rights reserved.</div>
            <div className="flex items-center gap-2">
              <Cpu size={14} /> Powering the next generation
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


