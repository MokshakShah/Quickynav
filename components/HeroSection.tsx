// components/HeroSection.tsx
'use client';

import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Model = {
	name: string;
	desc: string;
	icon: string;
	tryIn: string[];
};

type HeroSectionProps = {
	isVisible: boolean;
};

const models: Model[] = [
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

export default function HeroSection({ isVisible }: HeroSectionProps) {
	if (!isVisible) return null;

	return (
		<>
			{/* Hero Section */}
			<section className="w-full px-6 md:px-12 lg:px-24 py-30 relative z-0">
				<div className="grid md:grid-cols-2 gap-16">
					{/* Left: Google AI Studio */}
					<div className="transition-all duration-500 ease-in-out hover:scale-[1.01]">
						<h1 className="text-6xl font-semibold mb-4 transition-colors duration-300 hover:text-white">
							Start building
						</h1>
						<p className="text-3xl text-gray-300 leading-relaxed mb-8 transition-opacity duration-300 hover:opacity-90">
							Build with Google AI Studio
							<br />
							Start building something new,
							<br />
							with cutting-edge AI models and tools
						</p>
						<div className="flex gap-4 flex-wrap">
							<button className="px-5 py-2.5 bg-white text-black text-base font-medium rounded-full hover:opacity-90 transition-all duration-300">
								Try Google AI Studio
							</button>
							<button className="flex items-center text-white text-base hover:underline transition-colors duration-300">
								View Gemini API docs →
							</button>
						</div>
					</div>

					{/* Right: Vertex AI */}
					<div className="flex flex-col items-end text-right py-20 transition-all duration-500 ease-in-out hover:scale-[1.01]">
						<div>
							<h2 className="text-6xl font-semibold mb-4 transition-colors duration-300 hover:text-white">
								Build with Vertex AI
							</h2>
							<p className="text-gray-300 text-3xl leading-relaxed mb-6 transition-opacity duration-300 hover:opacity-90">
								Explore 200+ models on our enterprise platform with tools
								<br />
								and features for AI development
							</p>
							<button className="px-5 py-2 border border-white/20 text-white rounded-full text-base hover:bg-white/10 transition-all duration-300">
								Try Vertex AI
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Try Latest Models Section */}
			<section className="w-full px-6 md:px-12 lg:px-24 py-10 bg-gradient-to-br from-[#0f0f0f] to-black">
				<div className="flex justify-between items-center mb-14">
					<h2 className="text-6xl font-medium">Try Latest Models</h2>
					<button className="text-3xl border border-white/20 px-4 py-1 rounded-full hover:bg-white/10 transition-all duration-300">
						View all models →
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{models.map((model) => (
						<div
							key={model.name}
							className="flex flex-col justify-between p-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-white/5">
							<Image
								src={model.icon}
								alt={model.name}
								width={60}
								height={60}
								className="mb-6 transition-transform duration-300 hover:scale-110"
							/>
							<h3 className="text-2xl font-semibold">{model.name}</h3>
							<p className="text-lg text-gray-300 mt-1 mb-4">{model.desc}</p>

							<div className="text-md text-gray-400 uppercase tracking-wide mb-1">
								Try it in
							</div>
							<ul className="space-y-1 mb-6">
								{model.tryIn.map((app) => (
									<li key={app}>
										<a
											href="#"
											className="text-sm text-white hover:underline flex items-center gap-1 transition-all duration-200">
											{app} <ArrowRight size={14} />
										</a>
									</li>
								))}
							</ul>

							<a
								href="#"
								className="text-sm text-white hover:underline flex items-center gap-1 mt-auto transition-all duration-200">
								Learn more <ArrowRight size={14} />
							</a>
						</div>
					))}
				</div>

				{/* Arrows */}
				<div className="flex justify-center gap-3 mt-14">
					<button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
						<ArrowLeft size={16} />
					</button>
					<button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
						<ArrowRight size={16} />
					</button>
				</div>
			</section>
		</>
	);
}
