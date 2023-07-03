"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

import { BsCalendarWeek } from "react-icons/bs";

const Appointment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };

  return (
    <div className="mt-8 ">
      <h1 className="text-4xl text-center">Make an appointment</h1>
      <div className="flex justify-around mt-8">
        <div>
          <h1 className="text-2xl">Date</h1>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="w-full p-2 border-2 border-black rounded-md"
            placeholderText="Select a date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <h1 className="text-2xl">Hours</h1>
          <div className="w-[200px] p-2 border-2 border-black rounded-md text-center flex gap-4">
            <TimePicker
              value={selectedTime}
              onChange={handleTimeChange}
              clearIcon={null}
              disableClock
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="bg-black text-white font-bold text-center p-2 rounded-lg mx-4 text-2xl flex justify-center gap-3 items-center hover:shadow-2xl hover:-translate-y-2 duration-500 cursor-pointer">
          <BsCalendarWeek size={25} />
          Make an Appointment
        </h1>
      </div>
    </div>
  );
};

export default Appointment;
