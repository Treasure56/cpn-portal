export type Admin = {
    _id: string;
    createdAt: string;
    email: string;
    password: string;
    full_name: string;
  };

  
  export type Manager = {
    _id: string;
    createdAt: string;
    full_name: string;
    email: string;
    phone: string;
    password: string;
    center_id: number;
  };

  export type Staff = {
    _id: string;
    createdAt: string;
    full_name: string;
    email: string;
    phone: string;
    center_id: number;
    salary: number;
    courses: number;
  };

  
  export type Centers = {
    _id: string;
    createdAt: string;
    name: string;
    location: string;
    code: string;
  };

  export type Payments = {
    _id: string;
    createdAt: string;
    student_id: number;
    amount: number;
    paid_at: string;
  };

  
  export type Courses = {
    _id: string;
    createdAt: string;
    title: string;
    duration: number;
    amount: number;
  };

  export type Students = {
    _id: string;
    createdAt: string;
    full_name: string;
    email: string;
    phone: string;
    center_id: number;
    student_id: string;
    reg_date: string;
    course_id: number;
    birth_date: string;
  };
  
  
  