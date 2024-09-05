import CourseCard from "./CourseCard";
import CreateCourse from "./CreateCourse";
import { Students } from "@/types";

export default function Courses(student: Students) {
    const {plan, _id} = student;
    // console.log(plan);
    
    
    return (
        <div className=" flex flex-col gap-2">
            <div className="flex justify-between">
                <h3 className=" text-lg font-[500]">Courses</h3>
          <CreateCourse studentId={_id}>
          <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm w-fit flex justify-end">
            Add Course +
          </button>
          </CreateCourse>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    plan.map((plan, i) => {
                        return (
                            <CourseCard key={i} student={student} props={plan} />
                        );
                    })
                }
            </div>
        </div>
    );
}