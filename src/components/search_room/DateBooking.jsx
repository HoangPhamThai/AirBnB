import { DatePicker } from "antd";
import React from "react";
import { labelLeaveDate, labelStartDate } from "../../constants/constants";

const { RangePicker } = DatePicker;

export default function DateBooking() {
  return (
    <div className="flex">
      <RangePicker
        className="border-none"
        showTime={false}
        placeholder={[labelStartDate, labelLeaveDate]}
      />
    </div>
  );
}
