import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";
import HeroSection from "@/components/sections/HeroSection";
import CareSection from "@/components/sections/CareSection";
import FavouritesSection from "@/components/sections/FavouritesSection";
import MoodSection from "@/components/sections/MoodSection";
import GallerySection from "@/components/sections/GallerySection";
import ForeverSection from "@/components/sections/ForeverSection";
import LoveLetterSection from "@/components/sections/LoveLetterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <FloatingHearts />
      <MusicToggle />
      <HeroSection />
      <CareSection />
      <FavouritesSection />
      <MoodSection />
      <GallerySection />
      <ForeverSection />
      <LoveLetterSection />
    </main>
  );
};

export default Index;
