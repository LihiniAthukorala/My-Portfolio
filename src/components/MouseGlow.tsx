import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(600px at ${glowX.get()}px ${glowY.get()}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
      }}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: glowX,
          top: glowY,
        }}
      />
    </motion.div>
  );
};

export default MouseGlow;
