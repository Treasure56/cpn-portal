import { Centers, Invoice, Manager, PaymentPlan, Payments, Staff, Students } from "@/types";

export const centerDummy: Centers = {
  name: "John Doe",
  location: "Lagos, Nigeria",
  code: "CPT-1234",
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
};
export const centerDummys = [centerDummy, centerDummy, centerDummy];

export const managersDummy: Manager = {
  "_id": "66b24e74fa542e880af0490e",
  "fullname": "Mr Abundance",
  "phone": "",
  "email": "Abu@g.com",
  "password": "12345",
  "center": {
      "_id": "66b22bec22ad23d1991acd05",
      "name": "Umuahia Center",
      "location": "Umuahia",
      "code": "00112243",
      "createdAt": "2024-08-06T13:58:04.890Z",
  },
  "createdAt": "2024-08-06T16:25:24.257Z",
};

export const managersDummys = [managersDummy, managersDummy, managersDummy];

export const staffDummy = ''

export const staffDummys = [staffDummy, staffDummy, staffDummy];

export const studentDummy: Students = {
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
  fullname: "John Doe",
  email: "j@j.com",
  phone: "08123456789",
  center: centerDummy,
  student_id: "1234567",
  reg_date: "2022-01-01T00:00:00.000Z",
  course_id: 1,
  birth_date: "2022-01-01T00:00:00.000Z",
  plan: []
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

export const paymentDummy:Payments = {
  _id: "1234567890",
  createdAt: "2022-01-01T00:00:00.000Z",
  amount: "10000",
  user_id: "1234567",
  payment_plan_id: "ADSE",
  payment_date: "2022-01-01T00:00:00.000Z",
  voucher_number: "123456789",
  disclaimer: "This is a disclaimer",
  message: "This is a message",
};

export const paymentDummys = [paymentDummy, paymentDummy, paymentDummy];

export const plansDummy:PaymentPlan = {
    _id: "ADSE",
    amount: 10000,
    course_id: "ADSE",
    estimate: 10000,
    installments: 3,
    last_payment_date: "2022-01-01T00:00:00.000Z",
    next_payment_date: "2022-01-01T00:00:00.000Z",
    reg_date: "2022-01-01T00:00:00.000Z",
    user_id: "1234567",

    
  };

export const plansDummys = [plansDummy, plansDummy];


export const invoiceDummy:Invoice ={
    _id: "1234567890",
    createdAt: "2022-01-01T00:00:00.000Z",
    amount: "10000",
    student_id: "1234567",
    payment_plan_id: "ADSE",
    date: "2022-01-01T00:00:00.000Z",
    disclaimer: "This is a disclaimer",
    message: "This is a message",
    due_date: "2022-01-01T00:00:00.000Z",
    voucher_number: "123456789",
}

export const invoiceDummys = [invoiceDummy, invoiceDummy, invoiceDummy];
