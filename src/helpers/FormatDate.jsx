import React from "react";

export const formatDateWithOrdinal = (dateString) => {
  // Create a date object without time zone shift
  const [year, month, day] = dateString.split("-");
  const date = new Date(year, month - 1, day); // Use month - 1 since months are zero-based in JavaScript

  // Get the day of the month
  const dayNumber = date.getDate();

  // Determine the ordinal suffix
  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  // Format the month and year
  const formattedMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date); // Renamed to avoid potential issues
  const yearNumber = date.getFullYear();

  // Split the day and ordinal for rendering
  const dayWithOrdinal = (
    <>
      {dayNumber}
      <sup>{ordinal(dayNumber)}</sup>
    </>
  );

  return (
    <>
      {formattedMonth} {dayWithOrdinal}, {yearNumber}
    </>
  );
};