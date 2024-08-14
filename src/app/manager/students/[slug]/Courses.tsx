import { plansDummys } from "@/utils/dummy";
import CourseCard from "./CourseCard";
import CreateCourse from "./CreateCourse";

export default function Courses() {
    return (
        <div className=" flex flex-col gap-2">
            <div className="flex justify-between">
                <h3 className=" text-lg font-[500]">Courses</h3>
          <CreateCourse>
          <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm w-fit flex justify-end">
            Add Course +
          </button>
          </CreateCourse>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    plansDummys.map((plansDummy) => {
                        return (
                            <CourseCard key={plansDummy._id} {...plansDummy} />
                        );
                    })
                }
            </div>
        </div>
    );
}