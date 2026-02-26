const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("care-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-blush via-lavender to-peach">
      <div className="max-w-2xl text-center space-y-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight">
          When your health feels low, my love becomes your medicine.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body italic">
          You don't have to be strong with me.
        </p>
        <button
          onClick={scrollToNext}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform"
        >
          💗 Come Closer
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
