import React from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Add Area', href: '/areas', icon: '📍' },
  { name: 'Add Person', href: '/persons', icon: '👤' },
  { name: 'Remove Person', href: '/remove', icon: '❌' },
  { name: 'Update Record', href: '/update', icon: '✏️' },
  { name: 'Find Record', href: '/search', icon: '🔍' },
  { name: 'Find Person Record', href: '/find-person', icon: '📋' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Management Panel</h2>
        <p className="text-sm text-gray-500 mt-1">Control Center</p>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;