'use client';

import React, { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard';
import Sidebar from '@/components/Sidebar';
import { User, UserWithPerformance } from '@/lib/types';

const departments = [
  "Engineering",
  "Support",
  "Research and Development",
  "Human Resources",
  "Product Management",
  "Marketing",
  "Services",
  "Accounting",
  "Training",
  "Legal",
  "Sales",
];

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
          department: departments[Math.floor(Math.random() * departments.length)],
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

  const usersByDepartment: { [key: string]: UserWithPerformance[] } = {};
  departments.forEach((dept) => {
    usersByDepartment[dept] = users.filter((user) => user.department === dept);
  });

  return (
    <div className="flex">
      <Sidebar departments={departments} />
      <main className="ml-64 flex-1 bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 pt-16">
        {departments.map((dept) => (
          <div key={dept} id={dept} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              {dept} Department
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {usersByDepartment[dept]?.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
