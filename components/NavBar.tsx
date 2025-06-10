// app/components/Navbar.tsx
'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-sm">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          SnowDev
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-yellow-300" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Get Started Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Authentication Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}