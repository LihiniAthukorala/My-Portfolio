import Section from './Section';
import { motion } from 'framer-motion';
import { Github } from './Icons';
import { ExternalLink, Terminal, Shield, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CanteenPro",
      subtitle: "Smart Canteen Management System",
      status: "Ongoing",
      desc: "Full-stack application to digitize canteen ordering. Features secure login, dynamic cart, and real-time order tracking with RESTful APIs.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      commits: 150,
      github: "https://github.com/AkinduShenal/canteen-pro"
    },
    {
      title: "TravelEase",
      subtitle: "Online Travel Management System",
      desc: "Comprehensive platform for travel bookings and equipment rentals. Includes an admin dashboard and real-time store tracking.",
      tech: ["React", "Express", "MongoDB", "Bootstrap"],
      commits: 98,
      github: "https://github.com/LihiniAthukorala/TravelEase"
    },
    {
      title: "Finance Tracker",
      subtitle: "Personal Finance Manager",
      desc: "Kotlin-based Android app for tracking daily expenses and monthly budgets with category-wise analysis and budget alerts.",
      tech: ["Kotlin", "Android Studio", "SharedPreferences"],
      commits: 64,
      github: "https://github.com/LihiniAthukorala/Personal-Financial-Tracker/tree/master/PersonalFinanceTracker2"
    },
    {
      title: "PlantyLife",
      subtitle: "Online Plant Ordering App",
      desc: "Android application focused on user-friendly onboarding, navigation, and intuitive UI for browsing and ordering plants.",
      tech: ["Kotlin", "Android Studio", "XML"],
      commits: 42,
      github: "https://github.com/LihiniAthukorala/Planty-Life"
    },
    {
      title: "Online Store",
      subtitle: "Java-based E-commerce System",
      desc: "Desktop application with full CRUD functionality, role-based access control, and secure user authentication workflows.",
      tech: ["Java", "JDBC", "MySQL", "Eclipse"],
      commits: 38,
      github: "https://github.com/LihiniAthukorala/Online_Shopping_System_Payment"
    }
  ];

  return (
    <Section id="projects" title="Academin Projects" subtitle="Accessing repository metadata...">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glow-card glass-dark p-6 rounded-2xl flex flex-col h-full group"
          >
            <div className="flex justify-between items-start mb-6">
               <FolderGit2 className="text-blue-500" size={32} />
               <div className="flex gap-4">
                 <a 
                   href={p.github} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="text-white/20 hover:text-blue-500 transition-all hover:scale-110"
                   title="View Code"
                 >
                   <Github size={20} />
                 </a>
                 <button 
                   className="text-white/20 hover:text-white transition-all hover:scale-110 disabled:opacity-0" 
                   disabled
                   title="Live Demo coming soon"
                 >
                   <ExternalLink size={20} />
                 </button>
               </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{p.title}</h3>
                {p.status === "Ongoing" && (
                  <span className="text-[8px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest animate-pulse">
                    Active
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">{p.subtitle}</p>
            </div>

            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{p.desc}</p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold text-blue-400 bg-blue-500/5 px-2 py-1 rounded-lg border border-blue-500/10 uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-[10px] text-slate-600 font-bold uppercase pt-4 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <Terminal size={12} />
                  <span>v1.{idx}.0</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={12} />
                  <span>Production Ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
