import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      );
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
      }}
      aria-hidden="true"
    >
      <div 
        className={`rounded-full transition-all duration-200 ${
          isPointer
            ? 'w-10 h-10 bg-cyan-400/20 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
            : 'w-6 h-6 bg-indigo-500/20 border border-indigo-400/40 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
        }`}
      />
    </div>
  );
}
