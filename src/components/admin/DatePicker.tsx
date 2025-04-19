
"use client";
import React, { useState } from 'react';
import { format, addMonths, subMonths, isSameDay, isSameMonth, isWithinInterval } from 'date-fns';
import * as Popover from '@radix-ui/react-popover';
import { generateCalendarDays, isDateInRange } from '@/utils/dateUtils';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';

export default function DatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const days = generateCalendarDays(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const displayDate = startDate 
    ? `${format(startDate, 'MMM dd, yyyy')}${endDate ? ` - ${format(endDate, 'MMM dd, yyyy')}` : ''}`
    : 'Select date range';

  return (
    <Popover.Root>
      <Popover.Trigger className="inline-flex h-10 w-full items-center justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-normal text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus-primary-dark focus:ring-offset-2">
        {displayDate}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content 
          className="z-50 w-auto rounded-md border bg-white shadow-lg"
          align="start"
          sideOffset={4}
        >
          <div className="w-full max-w-md rounded-xl bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <FaChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-lg font-semibold text-gray-800">
                {format(currentDate, 'MMMM yyyy')}
              </h2>
              <button
                onClick={handleNextMonth}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <FaChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1">
              {weekDays.map(day => (
                <div key={day} className="py-2 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days.map((date, index) => {
                const isSelected = startDate && isSameDay(date, startDate) || 
                                 endDate && isSameDay(date, endDate);
                const isInRange = isDateInRange(date, startDate, endDate);
                const isToday = isSameDay(date, new Date());

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={`
                      flex h-10 items-center justify-center rounded-full text-sm transition-colors
                      ${isSelected ? 'bg-purple-600 text-white' : ''}
                      ${isInRange ? 'bg-purple-100' : ''}
                      ${isToday && !isSelected ? 'border-2 border-primary-dark' : ''}
                      ${!isSameMonth(date, currentDate) ? 'text-gray-400' : 'text-gray-700'}
                      hover:bg-purple-50
                    `}
                  >
                    {format(date, 'd')}
                  </button>
                );
              })}
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
