import React from 'react';
import Image from 'next/image';
import { UserWithPerformance } from '@/lib/types';
import { Star } from 'lucide-react';

interface UserCardProps {
  user: UserWithPerformance;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <Image
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{user.company.department}</p>
      
      <div className="flex items-center my-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < user.performanceRating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="flex space-x-2 mt-4">
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">View</button>
        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Bookmark</button>
        <button className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600">Promote</button>
      </div>
    </div>
  );
} 