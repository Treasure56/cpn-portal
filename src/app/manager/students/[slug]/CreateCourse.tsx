"use client";

import { AppSelect, FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { useChangeSearchParams } from "@/hooks";
import { useCourses } from "@/hooks/useCourses";
import { AlertDialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function CreateCourse({
  children,
}: {
  children: React.ReactNode;
}) {
  const { courses } = useCourses();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialog.Content>
        <div>
          <div className="flex justify-between pb-6">
            <h4 className="font-semibold">Add New Course</h4>
            <AlertDialog.Cancel>
              <IoClose />
            </AlertDialog.Cancel>
          </div>
          <form className="flex flex-col gap-4">
            <FormMessage res={{}} />
            <AppSelect
              name="course_id"
              title="Course"
              readonly={!courses}
              options={
                !courses
                  ? ["loading..."]
                  : courses.map((item) => ({
                      title: item.title,
                      value: item._id,
                    }))
              }
            />
            {fields.map((item) => {
              return <AppInput key={item.name} {...item} />;
            })}
            <FormButton className="btn-primary">Submit</FormButton>
          </form>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

const fields: AppInputProps[] = [
  {
    name: "amount",
    title: "Amount",
    placeholder: "Enter Course Amount",
  },
  {
    name: "installments",
    title: "Installments",
    placeholder: "Enter installments",
    type: "number",
  },
  {
    name: "reg_date",
    title: "Registration Date",
    placeholder: "Enter Registration Date",
    type: "date",
  },
];
