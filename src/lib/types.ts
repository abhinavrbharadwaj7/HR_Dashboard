// types.ts
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  // include other fields from API if needed
}

export interface UserWithPerformance extends User {
  department: string;
  performanceRating: number;
}
