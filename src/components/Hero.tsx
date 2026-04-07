import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin, Whatsapp } from './Icons';
import { useEffect, useState } from 'react';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-blue-500">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 vignette" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Welcome to my universe
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            LIHINI <br />
            <span className="gradient-text">ATHUKORALA</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium text-slate-400 min-h-[1.5em]">
            I'm a <Typewriter texts={["Full Stack Developer", "UI/UX Designer", "Software Engineer"]} />
          </div>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed pt-4">
            Hello! I'm Lihini Athukorala, a passionate Full-Stack Developer dedicated to building modern, 
            scalable, and user-friendly web applications. With a strong foundation in JavaScript, 
            React.js, Node.js, and the MERN stack, I love turning ideas into reality through code.
          </p>

          <div className="flex flex-col items-center gap-8 pt-10">
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/CV.pdf"
                download="Lihini_Athukorala_CV.pdf"
                className="px-8 py-4 bg-[#0a0a0a] hover:bg-[#111] text-white rounded-full font-bold border border-white/10 transition-all hover:scale-105 flex items-center gap-2"
              >
                Download CV
                <Download size={20} />
              </a>
            </div>

            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              </motion.div>

              <div className="flex items-center gap-6 pt-2">
                {[
                  { Icon: Github, href: "https://github.com/LihiniAthukorala", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/lihini-athukorala-759803347/", label: "LinkedIn" },
                  { Icon: Whatsapp, href: "https://wa.me/94713873172", label: "WhatsApp" },
                ].map(({ Icon, href, label }) => (
                  <a 
                    key={label}
                    href={href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white/40 hover:text-white transition-all hover:scale-110"
                    title={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
