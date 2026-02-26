import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      size: 12 + Math.random() * 18,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-0 animate-float-heart text-primary/40"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            fontSize: `${h.size}px`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
