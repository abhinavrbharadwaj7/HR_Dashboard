export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  company: {
    department: string;
  };
  image: string;
}

export interface UserWithPerformance extends User {
  performanceRating: number;
} 