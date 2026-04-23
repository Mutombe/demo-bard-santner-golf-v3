import React, { useEffect, useRef, useState } from 'react';

// Fail-visible reveal: fade + 12px translate, 700ms ease-out.
// 2s safety-net timer ensures content is never stuck invisible.
export default function SectionReveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) { setVisible(true); return; }

    // Safety net — force-show after 2s regardless of IO events.
    const safety = setTimeout(() => setVisible(true), 2000);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
          clearTimeout(safety);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(node);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 700ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
