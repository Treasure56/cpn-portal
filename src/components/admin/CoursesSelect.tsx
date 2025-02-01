import { withAll } from "@/functions/helpers";
import { useChangeSearchParams } from "@/hooks";
import { useCourses } from "@/hooks/useCourses";
import { AppSelect } from "../form";

export default function CoursesSelect() {
    const { params, pushParams } = useChangeSearchParams();
    const {courses} = useCourses();
    return (
        <AppSelect
        variant="app-select"
        value={params.get('course') ?? ''}
        name="course"
        readonly={!courses} options={!courses ? ['loading...'] : withAll(courses.map(item => ({title: item.title, value: item._id})), "courses")}
        onChange={(e) => pushParams({ course: e })}
      />
    );
}