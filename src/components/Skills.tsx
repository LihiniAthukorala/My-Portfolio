import Section from './Section';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Layout, Smartphone, 
  Cpu
} from 'lucide-react';

const Skills = () => {
  const categories = [
    { 
      title: "Frontend", 
      icon: <Layout className="text-blue-400" />,
      skills: [
        { name: "React.js", slug: "react" },
        { name: "TypeScript", slug: "typescript" },
        { name: "JavaScript", slug: "javascript" },
        { name: "Tailwind", slug: "tailwindcss" },
        { name: "HTML/CSS", slug: "html5" }
      ]
    },
    { 
      title: "Backend", 
      icon: <Database className="text-cyan-400" />,
      skills: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express", slug: "express" },
        { name: "Spring Boot", slug: "springboot" },
        { name: ".NET", slug: "dotnet" },
        { name: "REST APIs", slug: "postman" }
      ]
    },
    { 
      title: "Languages", 
      icon: <Code2 className="text-indigo-400" />,
      skills: [
        { name: "Java", slug: "openjdk" },
        { name: "Python", slug: "python" },
        { name: "JavaScript", slug: "javascript" },
        { name: "Kotlin", slug: "kotlin" },
        { name: "C#", slug: "csharp" }
      ]
    },
    { 
      title: "Databases", 
      icon: <Database className="text-purple-400" />,
      skills: [
        { name: "MongoDB", slug: "mongodb" },
        { name: "MySQL", slug: "mysql" },
        { name: "SQL Server", slug: "microsoftsqlserver" }
      ]
    },
    { 
      title: "Mobile", 
      icon: <Smartphone className="text-pink-400" />,
      skills: [
        { name: "Android", slug: "android" },
        { name: "Kotlin", slug: "kotlin" },
        { name: "XML", slug: "xml" }
      ]
    },
    { 
      title: "Tools", 
      icon: <Cpu className="text-orange-400" />,
      skills: [
        { name: "GitHub", slug: "github" },
        { name: "VS Code", slug: "visualstudiocode" },
        { name: "Figma", slug: "figma" },
        { name: "Docker", slug: "docker" },
        { name: "IntelliJ", slug: "intellijidea" }
      ]
    },
  ];

  return (
    <Section id="skills" title="Technical.Arsenal" subtitle="Scanning skill clusters...">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glow-card glass-dark p-8 rounded-3xl group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-blue-500/10 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map(skill => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl transition-all hover:bg-white/10 hover:border-white/10 group/skill"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/white`} 
                    alt={skill.name}
                    className="w-4 h-4 opacity-70 group-hover/skill:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-medium text-slate-400 group-hover/skill:text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
