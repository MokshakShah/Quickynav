'use client';
import {
	ChevronDown,
	Code,
	Palette,
	Cpu,
	Brain,
	Grid2x2,
	Database,
	Cloud,
	Settings,
	Compass,
	ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

type SidebarItem =
	| 'Web Development'
	| 'UI/UX Design'
	| 'Software Engineering'
	| 'AI & Machine Learning'
	| 'Microsoft Technologies'
	| 'Salesforce Services'
	| 'Cloud & DevOps'
	| 'ServiceNow Services'
	| 'IT & Digital Consulting';

const sidebarItems: SidebarItem[] = [
	'Web Development',
	'UI/UX Design',
	'Software Engineering',
	'AI & Machine Learning',
	'Microsoft Technologies',
	'Salesforce Services',
	'Cloud & DevOps',
	'ServiceNow Services',
	'IT & Digital Consulting',
];

const iconMap: Record<SidebarItem, React.ElementType> = {
	'Web Development': Code,
	'UI/UX Design': Palette,
	'Software Engineering': Cpu,
	'AI & Machine Learning': Brain,
	'Microsoft Technologies': Grid2x2,
	'Salesforce Services': Database,
	'Cloud & DevOps': Cloud,
	'ServiceNow Services': Settings,
	'IT & Digital Consulting': Compass,
};

const contentData: Record<SidebarItem, string[]> = {
	'Web Development': [
		'Enterprise Web Portals',
		'E-commerce Platform Engineering',
		'Headless CMS Implementations',
		'Progressive Web Applications (PWAs)',
		'Landing Page Optimization & CRO',
		'Custom API & Microservices Architecture',
		'Website Lifecycle Management',
		'Performance Engineering & Security Hardening',
	],
	'UI/UX Design': [
		'Experience Strategy & UX Research',
		'Advanced UI Systems Design',
		'Mobile UX Optimization',
		'Accessibility & Compliance (WCAG, ADA)',
		'Conversion-Centric UX Design',
		'Design Systems & Brand Guidelines',
	],
	'Software Engineering': [
		'Full-Stack Product Engineering',
		'Scalable MVP Development',
		'Embedded & IoT Systems',
		'Immersive AR/VR Experiences',
		'Enterprise Application Integration',
		'Cloud-Native Database Architecture',
	],
	'AI & Machine Learning': [
		'Custom AI Model Engineering',
		'Machine Learning Lifecycle Management',
		'Computer Vision & Video Intelligence',
		'Natural Language Understanding (NLU)',
		'Predictive Intelligence & Data Forecasting',
		'AI-Powered Personalization Engines',
	],
	'Microsoft Technologies': [
		'Enterprise ASP.NET Solutions',
		'Power BI Embedded Analytics',
		'SharePoint Intranet Portals',
		'Sitecore Experience Platforms',
		'Low-Code Apps with Power Apps',
		'Process Automation via Power Automate',
	],
	'Salesforce Services': [
		'Salesforce Cloud Architecture',
		'End-to-End CRM Implementation',
		'Salesforce App Cloud Development',
		'Data-Driven Integrations',
		'Managed Salesforce Services',
	],
	'Cloud & DevOps': [
		'Cloud-Native Application Development',
		'SaaS Infrastructure Engineering',
		'Enterprise DevOps Strategy',
		'CI/CD Pipeline Automation',
		'Multi-Cloud Deployments (AWS, Azure, GCP)',
		'Cloud Infrastructure Monitoring & Management',
	],
	'ServiceNow Services': [
		'ServiceNow Digital Workflow Consulting',
		'Platform Customization & Configuration',
		'Enterprise Service Management Applications',
		'Workflow Automation Design',
		'Quality Assurance & Testing Services',
		'Fully Managed ServiceNow Environments',
	],
	'IT & Digital Consulting': [
		'Technology Modernization Advisory',
		'Digital Transformation Strategy',
		'Cloud Adoption & Readiness Planning',
		'Enterprise AI & Data Strategy',
		'Cybersecurity Posture Assessment',
		'Infrastructure & Architecture Consulting',
	],
};

type ServicesDropdownProps = {
	isOpen?: boolean;
};

export default function ServicesDropdown({ isOpen }: ServicesDropdownProps) {
	const [activeTab, setActiveTab] = useState<SidebarItem>(sidebarItems[0]);

	return (
		<div className="relative">
			<button className="flex items-center gap-1 text-xl text-gray-300 hover:bg-white/20 px-4 py-2 rounded-full transition">
				Services <ChevronDown size={16} />
			</button>

			<div
				className={`fixed right-0 top-full w-full h-[460px]  backdrop-blur-xl text-white flex z-50 px-10 gap-6 shadow-lg transition-all duration-300 ease-in-out
					${
						isOpen
							? 'opacity-100 translate-y-0 pointer-events-auto'
							: 'opacity-0 -translate-y-4 pointer-events-none'
					}
				`}>
				{/* Sidebar */}
				<div className="w-72 border-r border-white/10 pr-6 py-6">
					<ul className="flex flex-col gap-3">
						{sidebarItems.map((item) => {
							const Icon = iconMap[item];
							return (
								<li
									key={item}
									onMouseEnter={() => setActiveTab(item)}
									className={`cursor-pointer px-4 py-2 rounded-md transition-all text-lg flex items-center justify-between group ${
										activeTab === item
											? 'bg-white/20 font-semibold scale-[1.02]'
											: 'hover:bg-white/10'
									}`}>
									<div className="flex items-center gap-3">
										{Icon && <Icon size={18} />}
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
				<div className="flex-1 py-6">
					<h4 className="text-3xl font-semibold mb-6 text-center">
						{activeTab}
					</h4>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
						{contentData[activeTab]?.map((line, idx) => (
							<div
								key={idx}
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200">
								<div className="w-8 h-8 bg-white/20 rounded" />
								<span className="text-white/90 text-base">{line}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
