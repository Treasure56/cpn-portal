
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWithinInterval } from 'date-fns';

export const generateCalendarDays = (date: Date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  
  return eachDayOfInterval({ start, end });
};

export const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null) => {
  if (!startDate || !endDate) return false;
  return isWithinInterval(date, { start: startDate, end: endDate });
};
