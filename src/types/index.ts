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
    fullname: string;
    email: string;
    phone: string;
    password: string;
    center: Centers;
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
    student_id: string;
    amount: string;
    paid_at: string;
    plan_id: string;
    voucner_number?: string;
  };

  
  export type Courses = {
    _id: string;
    createdAt: string;
    title: string;
    duration: string;
    amount: string;
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

  export type Invoice = {
    _id: string;
    student_id: string;
    amount: string;
    plan_id: string;
    message: string,
    disclaimer: string,
    date: string;
    createdAt: string
    due_date: string
    voucner_number?: string;
  }

  export type PaymentPlan ={
    _id: string;
    user_id: string;
    amount: number; //
    course_id: string; 
    installments: number; //
    estimate: number;
    last_payment_date: string;
    next_payment_date: string;
    reg_date: string; //
  }
  
  
  