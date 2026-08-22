"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [showLogo, setShowLogo] = useState(false);

  const bootLogs = [
    "INITIALIZING SHASHIL.DEV...",
    "> Loading profile............. OK",
    "> Connecting GitHub.......... OK",
    "> Loading engineering stack.. OK",
    "> Preparing projects......... OK",
    "> Establishing interface..... OK",
    "SYSTEM READY"
  ];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    // Show logo first
    timeouts.push(setTimeout(() => setShowLogo(true), 100));

    // Sequence logs
    bootLogs.forEach((log, index) => {
      timeouts.push(
        setTimeout(() => {
          setLines((prev) => [...prev, log]);
        }, 500 + index * 500)
      );
    });

    // Complete boot
    timeouts.push(
      setTimeout(() => {
        onComplete();
      }, 5000)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-cyber-cyan font-mono"
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: showLogo ? 1 : 0.8, opacity: showLogo ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 relative flex items-center justify-center w-24 h-24"
          >
            <div className="absolute inset-0 rounded-full border-2 border-cyber-cyan/30 border-t-cyber-cyan animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 rounded-full border border-cyber-purple/20 border-b-cyber-purple animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
            <span className="text-3xl font-bold tracking-tighter text-white drop-shadow-[0_0_10px_rgba(0,245,255,0.8)]">&lt;SW /&gt;</span>
          </motion.div>

          <div className="w-80 h-48 flex flex-col justify-end text-sm">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${i === bootLogs.length - 1 ? "text-green-400 mt-4 font-bold" : "text-cyber-cyan/80"}`}
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-cyber-cyan mt-1"
            />
          </div>

          {/* Loading Bar */}
          <div className="w-80 mt-8 h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-cyber-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]"
            />
          </div>
        </div>

        <button 
          onClick={onComplete}
          className="absolute bottom-8 text-xs text-white/40 hover:text-white/80 transition-colors"
        >
          [ SKIP ]
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
