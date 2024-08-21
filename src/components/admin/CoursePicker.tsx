"use client";

import { fetchCourse } from "@/actions";
import { Courses } from "@/types";
import { tags } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function CoursePicker({ value = [] }: { value?: Courses[] | string[] }) {
  const [selected, setSelected] = useState(value.map(i=> typeof i == 'string' ? i : i._id));
  const { data, isLoading, error } = useQuery({
    queryKey: [tags.course],
    queryFn: () =>
      fetchCourse().then((res) => {
        if (!res || res == "error") return null;
        return res;
      }),
  });

  if (isLoading || !data) return <div className="info">Loading courses</div>;
  return (
    <div className="p-2 bg-neutral-100 rounded">
        <h4>Courses:</h4>
      <div className="flex flex-wrap gap-4 pt-2">
        <input type="hidden" value={JSON.stringify(selected)} name="courses" />
        {data.map((course, i) => {
          const isSelected = selected.includes(course._id);
          return (
            <button
            type="button"
            role="button"
              key={i}
              onClick={() => {
                if (isSelected)
                  setSelected((v) => v.filter((i) => i != course._id));
                else setSelected((v) => [...v, course._id]);
              }}
              className={`px-3 py-1 rounded border text-sm ${
                isSelected ? "bg-primary/20 border-primary" : "bg-dark/10"
              }`}
            >
              {course.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
