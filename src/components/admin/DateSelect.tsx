import { withAll } from "@/functions/helpers";
import { AppInput, AppSelect } from "../form";
import { useChangeSearchParams, useDate } from "@/hooks";

export default function DateSelect() {
  const { params, pushParams } = useChangeSearchParams();
  const { centers: dates } = useDate();
  return (
    <AppInput
      
      value={params.get("date") ?? ""}
      name="date"
      type="date"
      readonly={!dates}
      placeholder="Date"
      onChange={(e) => pushParams({ date: e })}
    />
  );
}
