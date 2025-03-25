// "use client";

// import type React from "react";
// import { useState } from "react";
// import { FaChevronDown, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
// import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

// type Inquiry = {
//   id: number;
//   name: string;
//   source: string;
//   description: string;
// };

// type Payment = {
//   id: number;
//   studentName: string;
// };

// export default function ManagerDailyReport() {
//   const [inquiries, setInquiries] = useState<Inquiry[]>([
//     { id: 1, name: "", source: "", description: "" },
//   ]);
//   const [payments, setPayments] = useState<Payment[]>([
//     { id: 1, studentName: "" },
//   ]);
//   const [paymentCount, setPaymentCount] = useState("");

//   const addInquiry = () => {
//     const newId = inquiries.length + 1;
//     setInquiries([
//       ...inquiries,
//       { id: newId, name: "", source: "", description: "" },
//     ]);
//   };

//   const removeInquiry = (id: number) => {
//     setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
//   };

//   const handleInquiryChange = (
//     id: number,
//     field: keyof Inquiry,
//     value: string
//   ) => {
//     setInquiries(
//       inquiries.map((inquiry) =>
//         inquiry.id === id ? { ...inquiry, [field]: value } : inquiry
//       )
//     );
//   };

//   const addPayment = () => {
//     const newId = payments.length + 1;
//     setPayments([...payments, { id: newId, studentName: "" }]);
//   };

//   const removePayment = (id: number) => {
//     setPayments(payments.filter((payment) => payment.id !== id));
//   };

//   const handlePaymentChange = (id: number, value: string) => {
//     setPayments(
//       payments.map((payment) =>
//         payment.id === id ? { ...payment, studentName: value } : payment
//       )
//     );
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted", { inquiries, payments, paymentCount });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="p-6 border-b border-gray-200">
//           <h2 className="text-2xl font-bold text-center text-gray-800">
//             Manager Daily Report
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit} className="p-6 space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="date"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Date
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="paymentCount"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Number of Payments
//               </label>
//               <input
//                 type="number"
//                 id="paymentCount"
//                 value={paymentCount}
//                 onChange={(e) => setPaymentCount(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="summary"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Daily Summary
//             </label>
//             <textarea
//               id="summary"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows={4}
//               placeholder="Provide a brief summary of the day's activities..."
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-lg font-medium text-gray-700">
//               Payments Received
//             </h3>
//             {payments.map((payment) => (
//               <div key={payment.id} className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Student Name"
//                   value={payment.studentName}
//                   onChange={(e) =>
//                     handlePaymentChange(payment.id, e.target.value)
//                   }
//                   className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removePayment(payment.id)}
//                   className="p-2 text-gray-400 hover:text-gray-500"
//                 >
//                   <FaMinusCircle className="h-5 w-5" />
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addPayment}
//               className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               <FaPlusCircle className="h-5 w-5 mr-2" />
//               Add Payment
//             </button>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-gray-700">New Inquiries</h3>
//             {inquiries.map((inquiry) => (
//               <div key={inquiry.id} className="space-y-4 p-4 border rounded-md">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor={`name-${inquiry.id}`}
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id={`name-${inquiry.id}`}
//                       placeholder="Inquirer's Name"
//                       value={inquiry.name}
//                       onChange={(e) =>
//                         handleInquiryChange(inquiry.id, "name", e.target.value)
//                       }
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor={`source-${inquiry.id}`}
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Source
//                     </label>
//                     <div className="relative">
//                       <select
//                         id={`source-${inquiry.id}`}
//                         value={inquiry.source}
//                         onChange={(e) =>
//                           handleInquiryChange(
//                             inquiry.id,
//                             "source",
//                             e.target.value
//                           )
//                         }
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
//                         required
//                       >
//                         <option value="">
//                           How did they hear about Aptech?
//                         </option>
//                         <option value="social-media">Social Media</option>
//                         <option value="relative">From a Relative</option>
//                         <option value="friend">From a Friend</option>
//                         <option value="advertisement">Advertisement</option>
//                         <option value="other">Other</option>
//                       </select>
//                       <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor={`description-${inquiry.id}`}
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Inquiry Details
//                   </label>
//                   <textarea
//                     id={`description-${inquiry.id}`}
//                     placeholder="Describe the inquiry..."
//                     value={inquiry.description}
//                     onChange={(e) =>
//                       handleInquiryChange(
//                         inquiry.id,
//                         "description",
//                         e.target.value
//                       )
//                     }
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     rows={3}
//                     required
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => removeInquiry(inquiry.id)}
//                   className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                 >
//                   <LuMinusCircle className="h-5 w-5 mr-2" />
//                   Remove Inquiry
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addInquiry}
//               className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               <LuPlusCircle className="h-5 w-5 mr-2" />
//               Add Inquiry
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Submit Daily Report
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
