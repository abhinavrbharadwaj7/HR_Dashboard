'use client';

import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  BookMarked,
  UserCheck,
  ShoppingCart,
  Settings,
  Headphones,
  Calculator,
  GraduationCap,
  Scale,
  DollarSign,
} from 'lucide-react';

const departmentIcons: { [key: string]: React.ReactElement } = {
  Engineering: <Briefcase size={24} />,
  Support: <Users size={24} />,
  'Research and Development': <BookMarked size={24} />,
  'Human Resources': <UserCheck size={24} />,
  'Product Management': <ShoppingCart size={24} />,
  Marketing: <Settings size={24} />,
  Services: <Headphones size={24} />,
  Accounting: <Calculator size={24} />,
  Training: <GraduationCap size={24} />,
  Legal: <Scale size={24} />,
  Sales: <DollarSign size={24} />,
};

type SidebarProps = {
  departments: string[];
};

export default function Sidebar({ departments }: SidebarProps) {
  return (
   <aside className="fixed top-24 left-0 h-[calc(100vh-6rem)] w-20 bg-white dark:bg-gray-900 shadow-lg z-50 overflow-y-auto">

      <div className="flex flex-col items-center py-6 space-y-6">
        {departments.map((dept) => (
          <Link
            key={dept}
            href={`#${dept}`}
            title={dept}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {departmentIcons[dept]}
          </Link>
        ))}
      </div>
    </aside>
  );
}
