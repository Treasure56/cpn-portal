"use client"
import { withAll } from "@/functions/helpers";
import { AppSelect } from "../form";
import { useCenters, useChangeSearchParams } from "@/hooks";
import { useReportType } from "@/hooks/useReportType";

export default function SelectReportType() {
    const { params, pushParams } = useChangeSearchParams();
    const {reports: reports} = useReportType();
    return (
        <AppSelect
        variant="app-select"
        value={params.get('report type') ?? ''}
        name="report"
        // options={withAll([], 'centers')}
        readonly={!reports} options={!reports ? ['loading...'] : withAll(reports.map(item => ({title: item.summary, value: item._id})), "report")}
        onChange={(e) => pushParams({ report: e })}
      />
    );
}