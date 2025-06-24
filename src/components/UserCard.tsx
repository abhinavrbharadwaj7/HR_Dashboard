'use client';

import React from 'react';
import Image from 'next/image';
import { UserWithPerformance } from '@/lib/types';
import { Star, Eye, Bookmark, TrendingUp } from 'lucide-react';
import { useTheme } from 'next-themes';

interface UserCardProps {
  user: UserWithPerformance;
}

export default function UserCard({ user }: UserCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const starColor = isDark ? '#fff' : '#1f2937'; // white in dark, gray-800 in light

  return (
    <div className="glass w-[320px] h-[360px] text-black dark:text-white flex flex-col items-center justify-center p-5 shadow-xl transition-all duration-300">
      <div className="mb-4">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          width={60}
          height={60}
          className="rounded-full border border-white shadow-md"
        />
      </div>
      <h3 className="text-xl font-bold mb-1 text-center">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-sm mb-1 text-center">{user.email}</p>
      <p className="text-sm mb-3 text-center">{user.company.department}</p>

      <div className="flex items-center justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4"
            color={starColor}
            fill={i < user.performanceRating ? starColor : 'none'}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm transition-all duration-200 shadow-md hover:shadow-lg">
          <Eye className="w-4 h-4" />
          View
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-800 text-white text-sm transition-all duration-200 shadow-md hover:shadow-lg">
          <Bookmark className="w-4 h-4" />
          Bookmark
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm transition-all duration-200 shadow-md hover:shadow-lg">
          <TrendingUp className="w-4 h-4" />
          Promote
        </button>
      </div>
    </div>
  );
}
