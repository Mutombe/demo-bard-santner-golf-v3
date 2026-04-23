import React, { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import { haptic } from '../lib/haptics';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => { haptic(8); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      aria-label="Scroll to top"
      className="press-physics fixed bottom-6 right-24 z-40 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: 'var(--color-gold-500)',
        color: 'white',
        boxShadow: '0 6px 22px rgba(15,20,32,0.28), 0 0 0 1px rgba(199,163,82,0.6)',
      }}
    >
      <ArrowUp size={18} weight="bold" />
    </button>
  );
}
