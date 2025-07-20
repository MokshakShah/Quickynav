'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ResponsibilitiesDropdownProps {
  isOpen?: boolean;
}

const responsibilitiesItems = [
  {
    title: 'Responsibility and safety',
    description: 'Ensuring AI safety through proactive security, even against evolving threats',
    link: '#',
  },
  {
    title: 'Policy',
    description: 'Our AI policy perspectives, priorities, and working alongside partners',
    link: '#',
  },
  {
    title: 'Building for everyone',
    description: 'Working together to build AI that’s helpful for everyone',
    link: '#',
  },
];

export default function ResponsibilitiesDropdown({ isOpen }: ResponsibilitiesDropdownProps) {
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
        Responsibility <ChevronDown size={16} />
      </button>

      {typeof window !== 'undefined' && (
        <div
          style={{ top: dropdownTop }}
          className={`fixed left-0 w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl text-white flex flex-col z-50 px-10 pt-10 gap-10 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Content grid */}
          <div className="grid grid-cols-4 gap-10 pb-10">
            {/* Heading */}
            <div className="col-span-1">
              <h2 className="text-3xl font-semibold mb-2">
                We’re building and deploying AI responsibly
              </h2>
            </div>

            {/* Responsibility cards */}
            <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {responsibilitiesItems.map((item, idx) => (
                <div key={idx} className="flex flex-col max-w-xs">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm mb-2">{item.description}</p>
                  <a
                    href={item.link}
                    className="text-sm text-blue-400 font-medium"
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
