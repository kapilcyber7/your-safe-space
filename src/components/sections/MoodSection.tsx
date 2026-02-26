import { useState } from "react";

type Mood = "weak" | "hug" | "better" | null;

const moodData: Record<Exclude<Mood, null>, { bg: string; message: string; tag: string }> = {
  weak: {
    bg: "from-lavender to-accent",
    message: "Come here. Sit with me.\nI will feed you.\nI will give you medicine.\nI will press your head.\nJust rest. I am here.",
    tag: "Care Mode Activated 💊🤍",
  },
  hug: {
    bg: "from-peach to-warm-beige",
    message: "Come closer.\nTight hug incoming.\nI won't let go until you smile.\nYou are safe with me.",
    tag: "Hug Therapy Started 🤗",
  },
  better: {
    bg: "from-blush to-primary/20",
    message: "That's my strong girl.\nNow we go for walk.\nIce cream date.\nMomos treat.\nForever hand holding.",
    tag: "Date Mode Activated 🍦🌸",
  },
};

const MoodSection = () => {
  const [mood, setMood] = useState<Mood>(null);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-all duration-700 bg-gradient-to-b ${
        mood ? moodData[mood].bg : "from-lavender to-blush"
      }`}
    >
      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12 text-center">
        How Are You Feeling Right Now?
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {([["weak", "😔 Weak"], ["hug", "🥺 Need Hug"], ["better", "😊 Better"]] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setMood(key)}
            className={`rounded-2xl px-8 py-5 text-xl font-body font-semibold transition-all duration-300 border border-border
              ${mood === key
                ? "bg-primary text-primary-foreground scale-110 shadow-[0_0_30px_hsl(340_60%_65%/0.4)]"
                : "bg-card text-foreground hover:scale-105 hover:shadow-[0_0_20px_hsl(340_60%_65%/0.2)]"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {mood && (
        <div className="text-center space-y-6 animate-fade-in-up max-w-lg">
          <p className="text-lg md:text-xl font-body text-foreground whitespace-pre-line leading-relaxed">
            {moodData[mood].message}
          </p>
          <span className="inline-block rounded-full bg-primary/20 px-6 py-2 text-sm font-semibold text-primary animate-pulse-glow">
            {moodData[mood].tag}
          </span>
        </div>
      )}

      <p className="mt-16 text-center text-lg font-display italic text-foreground max-w-md">
        "No matter which button you press… I am here. I am yours."
      </p>
    </section>
  );
};

export default MoodSection;
