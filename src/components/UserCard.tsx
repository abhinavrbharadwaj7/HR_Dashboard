// components/UserCard.tsx

import React from 'react';
import { UserWithPerformance } from '@/lib/types';
import { Star } from 'lucide-react';

interface Props {
  user: UserWithPerformance;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="glass p-6 rounded-2xl w-72 shadow-lg transition-transform hover:scale-105 dark:text-white">
      <div className="flex items-center justify-center mb-4">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-20 h-20 rounded-full object-cover border-2 border-white"
        />
      </div>
      <h3 className="text-xl font-bold text-center">{user.firstName} {user.lastName}</h3>
      <p className="text-sm text-center text-gray-500 dark:text-gray-400">{user.email}</p>
      <p className="text-sm text-center mt-1 text-gray-500 dark:text-gray-400">{user.department}</p>
      <div className="flex justify-center mt-4">
        {[...Array(user.performanceRating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 w-4 h-4 fill-yellow-400" />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
