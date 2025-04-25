// "use client"
// import { withAll } from "@/functions/helpers";
// import { AppSelect } from "../form";
// import { useCenters, useChangeSearchParams } from "@/hooks";

// export default function ReportSelect() {
//     const { params, pushParams } = useChangeSearchParams();
//     return (
//         <AppSelect
//         variant="app-select"
//         value={params.get('report_type') ?? ''}
//         name="center"
//         options={[
//             {title: "Finacial", value:}
//         ]}
//         onChange={(e) => pushParams({ report_type: e })}
//       />
//     );
// }