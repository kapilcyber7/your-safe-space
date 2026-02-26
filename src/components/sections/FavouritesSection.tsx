const favourites = [
  { emoji: "🌸", label: "Flowers" },
  { emoji: "🍦", label: "Ice Cream" },
  { emoji: "🥟", label: "Momos" },
  { emoji: "🌙", label: "Evening Walk" },
  { emoji: "🤝", label: "Forever Hand Holding" },
];

const FavouritesSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-warm-beige to-lavender">
    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-14 text-center">
      Your Favourite Things
    </h2>
    <div className="flex flex-wrap justify-center gap-8 mb-14 max-w-3xl">
      {favourites.map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 animate-soft-bounce"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <span className="text-5xl md:text-6xl">{f.emoji}</span>
          <span className="text-sm font-body font-medium text-muted-foreground">{f.label}</span>
        </div>
      ))}
    </div>
    <p className="text-center text-lg md:text-xl font-display italic text-foreground max-w-lg">
      "Even if your day is bad, I will bring your favourite things and turn it into our moment."
    </p>
  </section>
);

export default FavouritesSection;
