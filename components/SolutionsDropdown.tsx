'use client';

import { useState, useRef, useEffect } from 'react';
import {
	ChevronDown,
	RefreshCw,
	ShoppingCart,
	BrainCog,
	Sparkles,
	Layers,
	ChevronRight,
	LucideIcon,
} from 'lucide-react';

type SidebarItem =
	| 'Digital Transformation'
	| 'Customer Experience & Commerce'
	| 'AI & ML Solutions'
	| 'Generative AI'
	| 'SAP Solutions';

interface SolutionsDropdownProps {
	isOpen?: boolean;
}

const sidebarItems: SidebarItem[] = [
	'Digital Transformation',
	'Customer Experience & Commerce',
	'AI & ML Solutions',
	'Generative AI',
	'SAP Solutions',
];

const iconMap: Record<SidebarItem, LucideIcon> = {
	'Digital Transformation': RefreshCw,
	'Customer Experience & Commerce': ShoppingCart,
	'AI & ML Solutions': BrainCog,
	'Generative AI': Sparkles,
	'SAP Solutions': Layers,
};

const contentData: Record<SidebarItem, string[]> = {
	'Digital Transformation': [
		'ERP Implementation & Advisory',
		'Legacy System Modernization',
		'Real-Time BI Dashboards',
		'Intelligent RPA Solutions',
		'Advanced Data Science Platforms',
		'Enterprise IT Architecture Planning',
	],
	'Customer Experience & Commerce': [
		'Adobe Commerce Cloud Solutions',
		'Omnichannel eCommerce Platforms',
		'Custom Mobile Commerce Applications',
		'AI-Enhanced Customer Journeys',
	],
	'AI & ML Solutions': [
		'AI Strategy & Roadmapping',
		'Conversational AI Platforms',
		'Intelligent Document Understanding',
		'Predictive Maintenance Systems',
		'AI-Driven Fraud Detection',
		'Forecasting & Demand Modeling',
	],
	'Generative AI': [
		'GPT-Based Virtual Assistants',
		'Content, Code & Image Generation',
		'Enterprise Model Fine-Tuning',
		'GenAI Workflow Automation',
	],
	'SAP Solutions': [
		'SAP S/4HANA Digital Core',
		'Rise with SAP Enablement',
		'SAP Cloud Integration Services',
		'SAP IBP (Integrated Business Planning)',
		'SAP Technical Optimization',
	],
};

export default function SolutionsDropdown({ isOpen }: SolutionsDropdownProps) {
	const [open, setOpen] = useState(false);
	const [activeTab, setActiveTab] = useState<SidebarItem>(sidebarItems[0]);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [dropdownTop, setDropdownTop] = useState(0);

	const handleMouseEnter = () => setOpen(true);
	const handleMouseLeave = () => setOpen(false);

	useEffect(() => {
		if (open && buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setDropdownTop(rect.bottom + window.scrollY);
		}
	}, [open]);

	return (
		<div
			className="relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<button
				ref={buttonRef}
				className="flex items-center gap-1 text-xl text-gray-300 hover:bg-white/20 px-4 py-2 rounded-full transition z-50">
				Solutions <ChevronDown size={16} />
			</button>

			{typeof window !== 'undefined' && (
				<div
					style={{ top: dropdownTop }}
					className={`fixed left-0 w-full max-h-[90vh] overflow-y-auto
						 backdrop-blur-xl text-white flex z-50 px-10 gap-6 shadow-lg 
						transition-all duration-300 ease-in-out pt-10
						${
							open
								? 'opacity-100 translate-y-0 pointer-events-auto'
								: 'opacity-0 -translate-y-4 pointer-events-none'
						}`}>
					{/* Sidebar */}
					<div className="w-72 border-r border-white/10 pr-6">
						<ul className="flex flex-col gap-3">
							{sidebarItems.map((item) => {
								const Icon = iconMap[item];
								return (
									<li
										key={item}
										onMouseEnter={() => setActiveTab(item)}
										className={`cursor-pointer px-4 py-2 rounded-md transition text-lg flex items-center justify-between group ${
											activeTab === item
												? 'bg-white/20 font-semibold'
												: 'hover:bg-white/10'
										}`}>
										<div className="flex items-center gap-3">
											<Icon size={18} />
											{item}
										</div>
										{activeTab === item && (
											<ChevronRight
												size={18}
												className="text-white opacity-80 transition-opacity group-hover:opacity-100"
											/>
										)}
									</li>
								);
							})}
						</ul>
					</div>

					{/* Right Content */}
					<div className="flex-1 pb-6">
						<h4 className="text-3xl font-semibold mb-6 text-center">
							{activeTab}
						</h4>
						<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
							{contentData[activeTab]?.map((line, idx) => (
								<div
									key={idx}
									className="industry-card relative flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition"
								>
									<div className="w-8 h-8 bg-white/20 rounded" />
									<span className="text-white/90 text-base">{line}</span>
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
