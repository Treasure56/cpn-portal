import { Centers, Manager, Staff, Students } from "@/types";

export const centerDummy: Centers = {
  name: "John Doe",
  location: "Lagos, Nigeria",
  code: "CPT-1234",
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
};
export const centerDummys = [centerDummy, centerDummy, centerDummy];

export const managersDummy: Manager = {
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
  full_name: "John Doe",
  email: "j@j.com",
  password: "12345",
  phone: "08123456789",
  center_id: 1,
};

export const managersDummys = [managersDummy, managersDummy, managersDummy];

export const staffDummy: Staff = {
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
  full_name: "John Doe",
  email: "j@j.com",
  phone: "08123456789",
  center_id: 1,
  salary: 10000,
  courses: 1,
};

export const staffDummys = [staffDummy, staffDummy, staffDummy];

export const studentDummy: Students = {
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
  full_name: "John Doe",
  email: "j@j.com",
  phone: "08123456789",
  center_id: 1,
  student_id: "1234567",
  reg_date: "2022-01-01T00:00:00.000Z",
  course_id: 1,
  birth_date: "2022-01-01T00:00:00.000Z",
};

export const studentDummys = [studentDummy, studentDummy, studentDummy];

export const courseDummy = {
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
  title: "ADSE",
  amount: "10000",
  duration: "3",
};

export const courseDummys = [courseDummy, courseDummy, courseDummy];
