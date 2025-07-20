'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface AboutDropdownProps {
	isOpen?: boolean;
}

const aboutItems = [
	{
		title: 'Why AI',
		description: 'Boldly pursued, AI transforms lives globally when built and used responsibly',
		link: '#',
	},
	{
		title: 'Our AI Journey',
		description: 'For over 20 years, Google has worked to make AI helpful for everyone',
		link: '#',
	},
	{
		title: 'AI Principles',
		description: 'Our commitment to developing technology responsibly',
		link: '#',
	},
	{
		title: 'For organizations',
		description: 'Our AI tools enable your organization to work smarter and make better decisions',
		link: '#',
	},
	{
		title: 'Learn AI Skills',
		description: 'Learn essential AI skills through courses, certifications, and more',
		link: '#',
	},
];

export default function AboutDropdown({ isOpen }: AboutDropdownProps) {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [dropdownTop, setDropdownTop] = useState(0);

	useEffect(() => {
		if (isOpen && buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setDropdownTop(rect.bottom + window.scrollY);
		}
	}, [isOpen]);

	return (
		<div
			className="relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button
				ref={buttonRef}
				className="flex items-center gap-1 text-xl text-gray-300 hover:bg-white/20 px-4 py-2 rounded-full transition z-50"
			>
				About <ChevronDown size={16} />
			</button>

			{typeof window !== 'undefined' && (
				<div
					style={{ top: dropdownTop }}
					className={`fixed left-0 w-full max-h-[90vh] overflow-y-auto
						backdrop-blur-xl text-white flex flex-col z-50 px-10
						transition-all duration-300 ease-in-out pt-10 gap-10
						${
							isOpen
								? 'block'
								: 'hidden'
						}`}
				>
					{/* Grid with 4 columns */}
					<div className="grid grid-cols-4 gap-10 pb-10">
						{/* Heading in the first column */}
						<div className="col-span-1">
							<h2 className="text-3xl font-semibold mb-2">
								We’re committed to improving the lives of as many people as possible
							</h2>
						</div>

						{/* Cards in the remaining 3 columns */}
						<div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
							{aboutItems.map((item, idx) => (
								<div key={idx} className="flex flex-col max-w-xs">
									<h4 className="text-xl font-semibold mb-2">{item.title}</h4>
									<p className="text-white/80 text-sm mb-2">{item.description}</p>
									<a
										href={item.link}
										className="text-sm text-blue-400 hover:underline font-medium"
									>
										Learn more
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
