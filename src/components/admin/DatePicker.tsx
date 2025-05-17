"use client";

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMemo, useState } from "react";
import { useChangeSearchParams } from "@/hooks";
import { PopoverClose } from "@radix-ui/react-popover";

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { params, pushParams } = useChangeSearchParams();
  const { from, to } = useMemo(() => {
    let [_from, _to] = [new Date(), new Date()];
    const [f, t] = [params.get("from"), params.get("to")];
    if (f) _from = new Date(f);
    if (t) _to = new Date(t);
    return {
      from: _from,
      to: _to,
    };
  }, [params]);
  const [date, setDate] = useState<DateRange | undefined>({
    from,
    to,
  });

  console.log(date);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "w-[250px] justify-start text-left font-normal app-select !py-6",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
         <div className="flex justify-between items-center">
           <PopoverClose
            onClick={() => {
              if (!date || !date.from || !date.to) return;
              const formatedFrom = format(date.from, "yyyy-MM-dd");
              const formatedto = format(date.to, "yyyy-MM-dd");
              pushParams({ from: formatedFrom, to: formatedto });
            }}
            className="btn-primary !mx-4 mb-2 !px-6"
          >
            apply
          </PopoverClose>
          <PopoverClose
            onClick={() => {
              
              pushParams({ from:"", to:"" });
            }}
            className="btn-dark !mx-4 mb-2 !px-6"
          >
            Reset
          </PopoverClose>
         </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
