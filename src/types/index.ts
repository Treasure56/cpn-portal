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
    fullname: string;
    email: string;
    phone: string;
    center: string;
    salary: number;
    courses: Courses[];
  };
  export type StaffDetailed = Staff &{
    center: Centers

  }

  
  export type Centers = {
    _id: string;                 
    createdAt: string;
    name: string;
    location: string;
    code: string;
  };

  export type CenterDetailed ={
    center: Centers;
    manager: Manager;
    studentCount: Number;
  }

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
    fullname: string;
    email: string;
    phone: string;
    center: Centers;
    student_id: string;
    reg_date: string;
    course_id: number;
    birth_date: string;
    plan: PaymentPlanDetailed[]
  };

  export type StudentDetailed = Students & {
    plan: PaymentPlanDetailed[]
  }

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
    amount: number; //
    user_id: string;
    course_id: string; 
    installments: number; //
    estimate: number;
    last_payment_date: string;
    next_payment_date: string;
    reg_date: string; //
  }

  export type PaymentPlanDetailed = PaymentPlan & {
    course_id: Courses;
  }

  export type Paginated<T = any> = {
    saved?: T[];
    existingRecords: T[],
      hasPreviousPage: boolean,
      previousPages: number,
      hasNextPage: boolean,
      nextPages: number,
      totalPages: number,
      totalDocuments: number,
      currentPage: number
  }
  
  
  