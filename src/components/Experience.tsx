import Section from './Section';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const data = [
    {
      title: "BSc (Hons) in Information Technology",
      org: "SLIIT",
      date: "2023 - Present",
      type: "education",
      desc: "Full-time undergraduate program focused on Software Engineering and Information Systems."
    },
    {
      title: "Diploma in Information Technology",
      org: "Esoft Metro Campus",
      date: "2023 - 2024",
      type: "education",
      desc: "Comprehensive foundation in computer science and application development."
    },
    {
      title: "Diploma in English",
      org: "ESoft Metro Campus, Gampaha",
      date: "February 2023 - October 2023",
      type: "education",
      desc: "Advanced communication and professional English language studies."
    },
    {
      title: "GCE Advanced Level Examination",
      org: "Holy Cross College, Gampaha",
      date: "2007 - 2023",
      type: "education",
      desc: "Successfully passed the GCE Advanced Level examination in 2022/2023, specializing in the Mathematics Stream."
    }
  ];

  return (
    <Section id="experience" title="Educational.Journey" subtitle="Compiling timeline history...">
      <div className="max-w-3xl mx-auto space-y-8 relative">
        <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-white/5 hidden md:block" />
        
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 w-full">
              <div className="glow-card glass-dark p-6 rounded-2xl border border-white/10 group relative overflow-hidden">
                {item.date.toLowerCase().includes('present') && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Active</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-2">
                  <Calendar size={14} className="text-blue-400" />
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 font-medium mb-4">{item.org}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
            
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#020617] border border-white/10 items-center justify-center z-10 shadow-lg shadow-blue-500/10">
              {item.type === 'education' ? <GraduationCap size={18} className="text-blue-500" /> : <Briefcase size={18} className="text-blue-500" />}
            </div>
            
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
