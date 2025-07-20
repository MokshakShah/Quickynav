'use client';

import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import SolutionsDropdown from './SolutionsDropdown';
import ServicesDropdown from './ServicesDropdown';
import IndustriesDropdown from './IndustriesDropdown';
import ResponsibilitiesDropdown from './ResponsibilitiesDropdown';
import AboutDropdown from './AboutDropdown';

interface NavbarProps {
	onMegaMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ onMegaMenuToggle }: NavbarProps) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = (menu: string) => {
		if (closeTimeoutRef.current) {
			clearTimeout(closeTimeoutRef.current);
			closeTimeoutRef.current = null;
		}
		openTimeoutRef.current = setTimeout(() => {
			setActiveDropdown(menu);
			onMegaMenuToggle?.(true);
		}, 300); // open delay
	};

	const handleMouseLeave = () => {
		if (openTimeoutRef.current) {
			clearTimeout(openTimeoutRef.current);
			openTimeoutRef.current = null;
		}
		closeTimeoutRef.current = setTimeout(() => {
			setActiveDropdown(null);
			onMegaMenuToggle?.(false);
		}, 300); // close delay
	};

	return (
		<nav className="relative z-50 w-full px-14 py-4 flex justify-between items-center backdrop-blur-md text-sm">
			<div className="text-2xl font-semibold text-white">QuickyTech</div>

			{/* Desktop Dropdowns */}
			<div className="hidden md:flex gap-2 items-center text-white text-sm relative">
				{/* Services */}
				<div
					className="relative"
					onMouseEnter={() => handleMouseEnter('services')}
					onMouseLeave={handleMouseLeave}>
					<ServicesDropdown isOpen={activeDropdown === 'services'} />
				</div>

				{/* Solutions */}
				<div
					className="relative"
					onMouseEnter={() => handleMouseEnter('solutions')}
					onMouseLeave={handleMouseLeave}>
					<SolutionsDropdown isOpen={activeDropdown === 'solutions'} />
				</div>

				{/* Industries */}
				<div
					className="relative"
					onMouseEnter={() => handleMouseEnter('industries')}
					onMouseLeave={handleMouseLeave}>
					<IndustriesDropdown isOpen={activeDropdown === 'industries'} />
				</div>

				{/* Responsibilities */}
				<div
					className="relative"
					onMouseEnter={() => handleMouseEnter('responsibilities')}
					onMouseLeave={handleMouseLeave}>
					<ResponsibilitiesDropdown isOpen={activeDropdown === 'responsibilities'} />
				</div>

				{/* About */}
				<div
					className="relative"
					onMouseEnter={() => handleMouseEnter('about')}
					onMouseLeave={handleMouseLeave}>
					<AboutDropdown isOpen={activeDropdown === 'about'} />
				</div>
			</div>

			{/* Desktop Buttons */}
			<div className="hidden md:flex items-center gap-3 text-xs">
				<button className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition duration-200">
					Try Google AI Studio
				</button>
				<button className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition duration-200">
					Try Gemini
				</button>
			</div>

			{/* Mobile Menu Toggle */}
			<button
				onClick={() => setMobileOpen(!mobileOpen)}
				className="md:hidden text-white transition-transform duration-200">
				{mobileOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="fixed top-full left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-4 md:hidden text-sm z-50 transition-all duration-300">
					<ServicesDropdown isOpen />
					<SolutionsDropdown isOpen />
					<IndustriesDropdown isOpen />
					<ResponsibilitiesDropdown isOpen />
					<AboutDropdown isOpen />
					<button className="w-full py-2 bg-white/20 rounded-full hover:bg-white/30 transition duration-200">
						Try Google AI Studio
					</button>
					<button className="w-full py-2 bg-white/20 rounded-full hover:bg-white/30 transition duration-200">
						Try Gemini
					</button>
				</div>
			)}
		</nav>
	);
}
