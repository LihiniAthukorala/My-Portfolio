import { motion } from 'framer-motion';

const symbols = [
  '{ }', '[ ]', '< >', '( )', '=>', ';', '&&', '||', 
  'const', 'git', 'npm', 'react', '!', '?', '//', '/*'
];

const FloatingSymbols = () => {
  // Generate a set of random positions and animations for symbols
  const items = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    text: symbols[i % symbols.length],
    x: Math.random() * 100, // percentage
    y: Math.random() * 100, // percentage
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 10,
    size: 14 + Math.random() * 12,
    opacity: 0.05 + Math.random() * 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ 
            x: `${item.x}vw`, 
            y: `${item.y}vh`, 
            opacity: 0,
            rotate: 0 
          }}
          animate={{ 
            y: [`${item.y}vh`, `${(item.y + 20) % 100}vh`, `${item.y}vh`],
            opacity: [item.opacity, item.opacity * 1.5, item.opacity],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            fontSize: `${item.size}px`,
            fontWeight: 'bold',
            color: '#3B82F6', // Using primary blue
            fontFamily: 'monospace',
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSymbols;
