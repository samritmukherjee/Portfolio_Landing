'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaRocket, FaCog, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero', icon: <FaHome /> },
  { id: 'about', label: 'About', href: '#about', icon: <FaUser /> },
  { id: 'experience', label: 'Experience', href: '#experience', icon: <FaBriefcase /> },
  { id: 'projects', label: 'Projects', href: '#projects', icon: <FaRocket /> },
  { id: 'skills', label: 'Skills', href: '#skills', icon: <FaCog /> },
  { id: 'contact', label: 'Contact', href: '#contact', icon: <FaEnvelope /> },
];

export const TreeNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const current = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 top-20 h-screen py-8 px-4 transition-all duration-300 ${
      isVisible ? 'translate-x-0' : '-translate-x-full'
    } hidden lg:block w-64 bg-stone-50/50 backdrop-blur-sm border-r border-stone-200 z-40`}>
      <div className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
              activeSection === item.id
                ? 'bg-accent-100 text-accent-700 font-semibold'
                : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
            {activeSection === item.id && (
              <span className="ml-auto w-1 h-6 bg-accent-500 rounded-full"></span>
            )}
          </a>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute -right-12 top-8 p-2 rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors"
        aria-label="Toggle navigation"
      >
        {isVisible ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </nav>
  );
};
