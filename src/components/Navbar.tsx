import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [activeItem, setActiveItem] = useState('About');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            const link = navLinks.find(l => l.href === `#${id}`);
            if (link) setActiveItem(link.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    navLinks.forEach(link => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4 w-auto">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-1 p-1.5 rounded-full border border-white/10 backdrop-blur-xl bg-[#020617]/40 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 ${scrolled ? 'scale-90 opacity-90' : 'scale-100'}`}
      >
        {/* Nav Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onMouseEnter={() => setHoveredItem(link.name)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setActiveItem(link.name)}
              className="relative px-4 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
            >
              {(hoveredItem === link.name || activeItem === link.name) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
