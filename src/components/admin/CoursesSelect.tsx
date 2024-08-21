import { withAll } from "@/functions/helpers";
import { AppSelect } from "../form";
import { useCenters, useChangeSearchParams } from "@/hooks";
import { useCourses } from "@/hooks/useCourses";

export default function CoursesSelect() {
    // const { params, pushParams } = useChangeSearchParams();
    const {courses} = useCourses();
    return (
        <AppSelect
        variant="app-select"
        // value={params.get('course') ?? ''}
        name="course"
        // options={withAll([], 'centers')}
        readonly={!courses} options={!courses ? ['loading...'] : courses.map(item => ({title: item._id, value: item.title}))}
        // onChange={(e) => pushParams({ center: e })}
      />
    );
}