import { withAll } from "@/functions/helpers";
import { AppSelect } from "../form";
import { useCenters, useChangeSearchParams } from "@/hooks";
import { useCourses } from "@/hooks/useCourses";

export default function CoursesSelect() {
    const { params, pushParams } = useChangeSearchParams();
    const {courses} = useCourses();
    return (
        <AppSelect
        variant="app-select"
        value={params.get('course') ?? ''}
        name="course"
        // options={withAll([], 'centers')}
        readonly={!courses} options={!courses ? ['loading...'] : withAll(courses.map(item => ({title: item.title, value: item._id})), "courses")}
        onChange={(e) => pushParams({ course: e })}
      />
    );
}