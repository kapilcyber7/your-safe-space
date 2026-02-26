import { useState } from "react";

const careCards = [
  { emoji: "🥣", title: "Feed You With My Hands", message: "When you feel weak, I will feed you slowly with my own hands.", gif: "/gifs/feed-bear.gif" },
  { emoji: "💊", title: "Medicine Time", message: "Medicine time, princess. No excuses.", gif: "/gifs/medicine-bear.gif" },
  { emoji: "🧠", title: "Head Massage", message: "Close your eyes. I'll press your head gently until you relax.", gif: "/gifs/massage-bear.gif" },
  { emoji: "🤗", title: "Hug Therapy", message: "10 tight hugs every hour prescribed.", gif: "/gifs/hug-bear.gif" },
  { emoji: "😴", title: "Sleep in My Arms", message: "Sleep like my little baby. I'll protect you.", gif: "/gifs/sleep-bear.gif" },
];

const CareSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="care-section" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-peach to-warm-beige">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12 text-center">
        Today, I Take Care of My Baby.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {careCards.map((card, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(activeCard === i ? null : i)}
            className={`group relative rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer border border-border
              ${activeCard === i
                ? "bg-primary/10 shadow-[0_0_30px_hsl(340_60%_65%/0.3)] scale-105"
                : "bg-card hover:shadow-[0_0_25px_hsl(340_60%_65%/0.2)] hover:scale-105"
              }`}
          >
            <img
              src={card.gif}
              alt={card.title}
              className={`w-24 h-24 mx-auto rounded-xl object-cover mb-3 transition-all duration-300 ${activeCard === i ? "w-32 h-32" : ""}`}
            />
            <span className="text-2xl block mb-1">{card.emoji}</span>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{card.title}</h3>
            <p className={`text-sm text-muted-foreground font-body transition-all duration-300 ${activeCard === i ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}>
              {card.message}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CareSection;
