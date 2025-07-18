'use client';

import { ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface IndustriesDropdownProps {
	isOpen?: boolean;
}

const industries: string[] = [
	'Healthcare & Life Sciences',
	'Retail & eCommerce',
	'Banking, Finance & Fintech',
	'Manufacturing & Industrial Engineering',
	'Education & Learning Technologies',
	'Supply Chain & Logistics',
	'Commercial Real Estate & PropTech',
	'Travel, Transport & Hospitality',
	'Government & Smart Cities',
	'Energy, Oil & Utilities',
];

export default function IndustriesDropdown({ isOpen }: IndustriesDropdownProps) {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [dropdownTop, setDropdownTop] = useState<number | null>(null);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true); // only render client-only features after mount
	}, []);

	useEffect(() => {
		if (hasMounted && isOpen && buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setDropdownTop(rect.bottom + window.scrollY);
		}
	}, [isOpen, hasMounted]);

	if (!hasMounted) return null; // prevent hydration mismatch

	return (
		<div className="relative">
			<button
				ref={buttonRef}
				className="flex items-center gap-1 text-xl text-gray-300 hover:bg-white/20 px-4 py-2 rounded-full transition z-50"
			>
				Industries <ChevronDown size={16} />
			</button>

			{isOpen && dropdownTop !== null && (
				<div
					style={{ top: dropdownTop }}
					className="fixed left-0 w-full max-h-[90vh] overflow-y-auto px-10 pb-12 backdrop-blur-xl text-white rounded-xl shadow-lg z-50 transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto"
				>
					<div className="flex-1 flex flex-col items-center pt-10">
						<h4 className="text-3xl font-semibold mb-6">Industries</h4>
						<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
							{industries.map((industry, idx) => (
								<div
									key={idx}
									className="industry-card relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition bg-transparent hover:bg-white/5"
								>
									<div className="w-8 h-8 bg-white/20 rounded" />
									<span className="text-white/90 text-base">{industry}</span>

									<svg
										className="border-anim absolute top-0 left-0 w-full h-full"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="none"
										>
										<rect
											x="1"
											y="1"
											width="calc(100% - 2px)"
											height="calc(100% - 2px)"
											rx="8"
											ry="8"
										/>
										</svg>

								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
