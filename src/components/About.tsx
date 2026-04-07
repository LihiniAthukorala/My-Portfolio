import Section from './Section';
import { motion } from 'framer-motion';
import { Code2, Heart, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Initializing personal data protocols...">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/10 h-full flex items-center justify-center group">
            {/* Profile Image */}
            <img 
              src="https://github.com/LihiniAthukorala.png" 
              alt="Lihini Athukorala" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Lihini+Athukorala&background=020617&color=3B82F6&size=512";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <p className="text-white font-bold text-xl">Lihini Athukorala</p>
               <p className="text-blue-400 text-sm">Full Stack Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-slate-400 leading-relaxed text-lg">
              Hello! I'm Lihini Athukorala, a passionate Full-Stack Developer dedicated to building modern, 
              scalable, and user-friendly web applications. With a strong foundation in JavaScript, 
              React.js, Node.js, and the MERN stack, I enjoy turning ideas into real-world solutions through code.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              My journey in technology started with a curiosity about how digital systems work. 
              Since then, I’ve developed my skills in both frontend and backend development, 
              continuously learning and adapting to new technologies. I enjoy collaborating with teams, 
              solving complex problems, and creating efficient systems that deliver a great user experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: <Code2 className="text-white" />, label: "Clean Code", sub: "QUALITY & MAINTAINABILITY", color: "bg-blue-500" },
              { icon: <Heart className="text-white" />, label: "User Focus", sub: "USER-CENTERED DESIGN", color: "bg-pink-500" },
              { icon: <Coffee className="text-white" />, label: "Dedication", sub: "COMMITTED TO EXCELLENCE", color: "bg-orange-500" },
              { icon: <Lightbulb className="text-white" />, label: "Innovation", sub: "ALWAYS LEARNING", color: "bg-green-500" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center text-center group hover:bg-white/10 transition-all">
                <div className={`p-3 ${item.color} rounded-2xl mb-4 shadow-lg shadow-${item.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <p className="text-white font-bold text-sm mb-1 uppercase tracking-tight">{item.label}</p>
                <p className="text-[8px] text-slate-600 font-bold uppercase tracking-widest leading-tight">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
