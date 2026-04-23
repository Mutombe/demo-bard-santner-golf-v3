import { useRef, useState } from 'react';

// Restrained 3D tilt on pointer move, max 3°. Skipped on coarse pointers.
export function useTilt(max = 3) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e) => {
    if (!ref.current) return;
    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(pointer: coarse)').matches) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) scale(1.005)`,
    });
  };

  const onMouseLeave = () => setStyle({ transform: '' });

  return { ref, style, onMouseMove, onMouseLeave };
}
