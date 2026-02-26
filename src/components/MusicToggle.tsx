import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      onClick={() => setPlaying(!playing)}
      className="fixed top-6 right-6 z-50 rounded-full bg-primary/20 backdrop-blur-sm p-3 text-primary hover:bg-primary/30 transition-colors"
      aria-label="Toggle music"
    >
      {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};

export default MusicToggle;
