"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      if (target.closest('.project-card')) {
        setIsProjectHover(true);
        setIsHovering(false);
      } else {
        setIsProjectHover(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyber-cyan rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : isProjectHover ? 0 : 1,
          opacity: isHovering || isProjectHover ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-cyber-cyan/50 rounded-full pointer-events-none z-[99] flex items-center justify-center bg-cyber-cyan/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : isProjectHover ? 2 : 1,
          borderColor: isProjectHover ? "rgba(139, 92, 246, 0.5)" : isHovering ? "rgba(0, 245, 255, 0.8)" : "rgba(0, 245, 255, 0.3)",
          backgroundColor: isProjectHover ? "rgba(139, 92, 246, 0.1)" : isHovering ? "rgba(0, 245, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
      >
        {isProjectHover && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[8px] font-mono font-bold text-white tracking-widest"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
