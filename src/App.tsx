import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import MouseGlow from './components/MouseGlow';
import FloatingSymbols from './components/FloatingSymbols';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] transition-colors duration-300 selection:bg-blue-500/30">
      <FloatingSymbols />
      <MouseGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <ScrollToTop />

      <footer className="py-20 text-center border-t border-white/5 relative bg-[#020617]">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-xl font-bold tracking-tighter mb-4">
              <span className="text-white">Lihini</span>
              <span className="text-blue-500">.</span>
              <span className="text-white/50">Dev</span>
           </div>
           <p className="text-slate-600 text-sm font-medium tracking-widest uppercase">
             © {new Date().getFullYear()} LIHINI ATHUKORALA // ALL RIGHTS RESERVED
           </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
