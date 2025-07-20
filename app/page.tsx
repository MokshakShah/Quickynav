'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// ✅ Type for model items
type ModelType = {
  name: string;
  desc: string;
  icon: string;
  tryIn: string[];
};

// ✅ Dummy data for models
const models: ModelType[] = [
  {
    name: 'Gemini 1.5',
    desc: 'Our most capable multimodal model.',
    icon: '/icons/gemini.svg',
    tryIn: ['Gemini', 'Android', 'Google Search'],
  },
  {
    name: 'Veo',
    desc: 'Our latest text-to-video model.',
    icon: '/icons/veo.svg',
    tryIn: ['YouTube', 'Google Labs'],
  },
  {
    name: 'Imagen 3',
    desc: 'State-of-the-art text-to-image generation.',
    icon: '/icons/imagen.svg',
    tryIn: ['ImageFX', 'Gemini'],
  },
  {
    name: 'Gemma',
    desc: 'Our open-weight family of lightweight models.',
    icon: '/icons/gemma.svg',
    tryIn: ['Colab', 'Hugging Face'],
  },
];

export default function Home() {
  const [showHero, setShowHero] = useState<boolean>(true);

  const handleMegaMenuToggle = (isOpen: boolean) => {
    setShowHero(!isOpen); // hide hero when mega menu is open
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Custom background with animated circles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Circle Background */}
        <div className="circles-container-in-header">
          <div className="circle bg-blue-500"></div>
          <div className="circle bg-purple-700"></div>
          <div className="circle bg-indigo-800"></div>
          <div className="circle bg-red-500"></div>
          <div className="circle bg-green-500"></div>
        </div>
      </div>

      {/* Navbar Component */}
      <Navbar onMegaMenuToggle={handleMegaMenuToggle} />

      {/* Hero Section */}
      <HeroSection isVisible={showHero} />
    </main>
  );
}
