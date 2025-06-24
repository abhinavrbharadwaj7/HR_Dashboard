import React from 'react';
import UserCard from '@/components/UserCard';
import { User, UserWithPerformance } from '@/lib/types';

async function getUsers(): Promise<UserWithPerformance[]> {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=20');
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await res.json();
    
    const usersWithPerformance = data.users.map((user: User) => ({
      ...user,
      performanceRating: Math.floor(Math.random() * 5) + 1,
    }));
    
    return usersWithPerformance;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <main className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Employee Performance Dashboard
        </h1>
        
        {users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No users found or failed to load data.</p>
          </div>
        )}
      </div>
    </main>
  );
} 