'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
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
			{/* Glow behind navbar */}
			<div className="fixed top-0 left-0 w-full h-72 bg-gradient-to-r from-purple-800 via-blue-700 to-green-700 blur-2xl opacity-40 animate-gradientMove pointer-events-none z-0" />

			<Navbar onMegaMenuToggle={handleMegaMenuToggle} />
			<HeroSection isVisible={showHero} />
		</main>
	);
}
