import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const photos = [
  { src: "/placeholder.svg", caption: "This was the day you smiled the most." },
  { src: "/placeholder.svg", caption: "Here you looked like my whole world." },
  { src: "/placeholder.svg", caption: "I wanted this moment forever." },
  { src: "/placeholder.svg", caption: "My favourite memory with you." },
];

const GallerySection = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handleUnlock = () => {
    if (password === "230405") {
      setUnlocked(true);
      setShowPrompt(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-blush to-lavender">
      {!unlocked && !showPrompt && (
        <button
          onClick={() => setShowPrompt(true)}
          className="rounded-full bg-primary/20 backdrop-blur px-8 py-4 text-lg font-body font-semibold text-primary hover:bg-primary/30 hover:scale-105 transition-all animate-soft-bounce"
        >
          Click If You Trust Me ❤️
        </button>
      )}

      {showPrompt && !unlocked && (
        <div className="bg-card rounded-2xl p-8 shadow-xl max-w-sm w-full text-center space-y-4 animate-fade-in-up border border-border">
          <p className="font-display text-xl text-foreground">Enter the password 🔐</p>
          <Input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder="••••••"
            className="text-center text-lg"
          />
          {error && <p className="text-sm text-destructive">Wrong password, try again 💔</p>}
          <button
            onClick={handleUnlock}
            className="rounded-full bg-primary px-6 py-2 text-primary-foreground font-semibold hover:scale-105 transition-transform"
          >
            Unlock 💗
          </button>
        </div>
      )}

      {unlocked && (
        <div className="w-full max-w-4xl space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-10">
            Only For Your Eyes 💖
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setSelectedPhoto(i)}
                className="group bg-card rounded-lg p-2 shadow-lg hover:shadow-[0_0_25px_hsl(340_60%_65%/0.3)] transition-all hover:scale-105 rotate-[var(--rotate)] border border-border"
                style={{ "--rotate": `${(i % 2 === 0 ? -2 : 2)}deg` } as React.CSSProperties}
              >
                <img src={photo.src} alt={photo.caption} className="w-full aspect-square object-cover rounded" />
                <p className="mt-2 text-xs font-body text-muted-foreground text-center">{photo.caption}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-foreground">
              {selectedPhoto !== null && photos[selectedPhoto].caption}
            </DialogTitle>
          </DialogHeader>
          {selectedPhoto !== null && (
            <img src={photos[selectedPhoto].src} alt="" className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
