'use client';

import React, { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard';
import { User, UserWithPerformance } from '@/lib/types';

export default function HomePage() {
  const [users, setUsers] = useState<UserWithPerformance[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://dummyjson.com/users?limit=20');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();

        const usersWithPerformance = data.users.map((user: User) => ({
          ...user,
          performanceRating: Math.floor(Math.random() * 5) + 1,
        }));

        setUsers(usersWithPerformance);
      } catch (error) {
        console.error(error);
        setUsers([]);
      }
    }

    fetchUsers();
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        {users.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-10">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No users found or failed to load data.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
